let express = require('express');
let router = express.Router();
let app = require("../app");
let user = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
    let newUser = new user({ name: "Albin Forsberg", username: "Abbef000", password: "12345" });
    newUser.save();
    res.render('index', { title: 'Express' });
});

router.post("/createuser", function(req, res, next) {
    console.log(req.body);
    let newUser = new user({ name: req.body.name, username: req.body.username, mail: req.body.mail, password: req.body.password });
    newUser.save();
    console.log("New user saved!");
});

router.get("/validateuser", function(req, res, next) {

    if (req.query.action == "username") {
        // Find username
        user.findOne({ username: req.query.username }).exec()
            .then(doc => {
                res.send(doc.username);
                console.log(doc);
            }).catch(err => res.send("Ok!"));
    } else if (req.query.action == "mail") {
        // Find username
        user.findOne({ mail: req.query.mail }).exec()
            .then(doc => {
                res.send(doc.mail);
                console.log(doc);
            }).catch(err => res.send("Ok!"));
    }
});

router.get("/signin", function(req, res, next) {
    user.findOne({ username: req.query.username, password: req.query.password }).exec()
        .then(doc => {
            res.send(doc.id);
        }).catch(err => res.send("Account not found!"));

});

module.exports = router;