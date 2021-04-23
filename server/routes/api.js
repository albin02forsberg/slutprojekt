let express = require('express');
let router = express.Router();
let app = require("../app");
let user = require("../models/user");
let drill = require("../models/drill");


// Create new user
// Request must contain name, username email and password
router.post("/createuser", function(req, res, next) {
    console.log(req.body);
    let newUser = new user({ name: req.body.name, username: req.body.username, mail: req.body.mail, password: req.body.password });
    newUser.save();
    console.log("New user saved!");
});


// Used to validate the user, if the function returs Ok!
// It means no user was found with the cooresponing request
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


// Validates and send a user object to the frontend
router.get("/signin", function(req, res, next) {
    user.findOne({ username: req.query.username, password: req.query.password }).exec()
        .then(doc => {
            if (req.query.password != doc.password) {
                res.send(null);
            } else {
                res.send(doc);
            }
        }).catch(err => res.send("null"));

});


// Get user object with username
router.get("/getuser", function(req, res, next) {
    user.findOne({ username: req.query.username }).then(doc => {
        console.log(doc)
        res.send(doc);
    }).catch(err => {
        console.log(err);
        res.send("Error");
    });
});


// Creates a new drill with drill object sent from the frontend
router.post("/newdrill", function(req, res, next) {
    console.log(req.body);

    let newDrill = new drill(req.body[0]);
    newDrill.save();
});


// Gets all userdrills based on username
router.get("/userdrills", function(req, res, next) {
    console.log("USERDRILLS");
    drill.find({ creator: req.query.username }).then(doc => {
        res.send(doc);
    })
});


// Gets drill objecs from id
router.get("/getdrill", function(req, res, next) {
    let id = req.query.id;
    console.log("Drill ID: " + id);

    drill.findById(id).then((doc) => {
        console.log(doc);
        res.send(doc);
    });
});


// Gets all drills in database
router.get("/getdrills", function(req, res, next) {
    drill.find().then((doc) => {
        res.send(doc);
    });
});


// Removes drill based on id
router.post("/deletedrill", function(req, res, next) {
    console.log(req.body.id);
    drill.deleteOne({ _id: req.body.id }, (err) => console.log(err));
});

module.exports = router;