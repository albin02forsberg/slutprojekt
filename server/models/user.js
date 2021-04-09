let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    name: String,
    mail: String,
    password: String,
    drills: [],
    trainings: [],
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("User", UserSchema);