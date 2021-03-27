let express = require("express");
let router = express.Router();

router.get("/", function(req, res, next) {
    let user = {
        name: "Albin",
        username: "test",
        mail: "testmail"
    }

    res.send(user);
});

router.post("/", function(req, res) {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;