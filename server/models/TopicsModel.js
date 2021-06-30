const mongoose = require("mongoose");

const TopicsModel = new mongoose.Schema({
    topicName: { type: String, required: true, trim: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: { type: String, required: true, trim: true }
});

module.exports = mongoose.model("Topic", TopicsModel);