const express = require('express');
const router = express.Router();
const multer = require("multer");

let user = require("../models/user");
let drill = require("../models/drill");
let session = require("../models/session");


const storage = multer.diskStorage({
    destination: "./public/images",
})
const upload = multer({ storage: storage });


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
router.post("/newdrill", upload.single("img"), function(req, res, next) {

    let newDrill = new drill(req.body.drill);
    console.log(newDrill._id);

    newDrill.save().then(() => res.send(newDrill._id));
});

router.post("/updatedrill", function(req, res, next) {
    drill.findOneAndUpdate(req.body.id, req.body.drill).then((doc) => {
        res.send(doc._id);
    })
});

router.post("/postdrillimg", upload.single("img"), (req, res, next) => {
    console.log(req.file);
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

// creates a new session and sends back url for continuation
router.get("/newsession", function(req, res, next) {
    console.log(req.query.session);

    let newSession = new session({
        name: "",
        moment: "",
        level: "",
        drills: req.query.session
    })
    newSession.save().then(() => {
        session.findOne({ drills: req.query.session }).then((doc) => {
            res.send(doc._id);
        });
    });

});

router.get("/getsession", function(req, res, next) {
    session.findById(req.query.id).then((doc) => {
        let session = doc;
        drill.find({
            "_id": {
                $in: doc.drills
            }
        }).then((doc) => {
            console.log(doc);
            res.send({
                drills: doc,
                session: session
            });
        })
    })
});

router.get("/getsessions", function(req, res, next) {
    session.find().then((doc) => {
        res.send(doc);
    })
});

router.get("/usersessions", function(req, res, next) {
    session.find({ creator: req.query.username }).then((doc) => {
        res.send(doc);
    });
})

router.post("/updatesession", function(req, res, next) {
    console.log(req.body);

    session.findOneAndUpdate(req.body.id, req.body.session).then((doc) => {
        console.log(doc);
        res.send(doc._id)
    })

});


module.exports = router;