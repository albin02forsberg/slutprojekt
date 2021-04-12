let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require("cors");
let mongoose = require("mongoose");

let user = require("./models/user");

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let apiRouter = require("./routes/api")

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api", apiRouter);

// Database
// let database = "mongodb://localhost:27017/slutprojekt";
let database = "mongodb+srv://user:d0BsBDPan1TP5f5I@cluster0.5aqbo.mongodb.net/slutprojekt?retryWrites=true&w=majority"
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;