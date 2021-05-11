let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let DrillSchema = new Schema({
    name: String,
    type: String,
    level: String,
    moment: String,
    description: String,
    explenation: String,
    organization: String,
    rules: String,
    creator: String,
    img: String,
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Drill", DrillSchema);