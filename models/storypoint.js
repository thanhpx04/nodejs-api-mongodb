const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
    value: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Story', storySchema);