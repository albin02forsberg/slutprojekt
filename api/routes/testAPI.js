let express = require("express");
let router = express.Router();

router.get("/", function(req, res, next){
    console.log("test");
    res.send(req.body.name);
});

router.post("/", function(req,res){
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;