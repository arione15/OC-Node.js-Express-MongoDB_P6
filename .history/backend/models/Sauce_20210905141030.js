const mongoose = require('mongoose');

const sauceSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mainPepper: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    heat: {
        type: Number,
        required: true
    }
    ,
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    usersLiked: { // ou type: [String]
        type: Array,
        required: true,
        default: []
    },
    usersDisliked: { // ou type: [String]
        type: Array,
        required: true,
        default: []
    }
})

module.exports = new mongoose.model("Sauce", sauceSchema)