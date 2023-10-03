const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    coordinates: {
        type : String,
        required: true,
    },
});

module.exports = Postt = mongoose.model ("Postt",postSchema);