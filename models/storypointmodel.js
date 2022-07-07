const mongoose = require("mongoose");

const storypointSchema = mongoose.Schema({
    value: {
        type: String,
        require: true
    },
    issueKey: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('StoryPoint', storypointSchema);