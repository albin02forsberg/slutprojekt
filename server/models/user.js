let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let Drill = new Schema({
    name: String,
    type: String,
    level: String,
    moment: String,
    description: String,
    explination: String,
    organization: String,
    rules: String,
    created: { type: Date, default: Date.now() }
});

let Training = new Schema({
    drills: [Drill],
    description: String,
    level: String,
    created: { type: Date, default: Date.now() }
});

let UserSchema = new Schema({
    username: String,
    name: String,
    mail: String,
    password: String,
    role: String,
    drills: [Drill],
    trainings: [Training],
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("User", UserSchema);