const mongoose = require("mongoose");

let gameSchema = new mongoose.Schema({
    gameName: { type: String, required: true },
    score: { type: Number, required: true },
    date: { type: Date, default:new Date() },
    userName: { type: String, required: true },
    delete: { type: Boolean, default:false }
});

module.exports = mongoose.model("game", gameSchema);