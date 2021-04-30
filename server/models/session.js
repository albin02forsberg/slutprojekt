let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let sessionSchema = new Schema({
    name: String,
    moment: String,
    level: String,
    drills: [],
    creator: String,
    description: String,
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("session", sessionSchema);