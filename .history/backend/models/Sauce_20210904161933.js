const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');


const SauceSchema = new mongoose.Schema({
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
    //,
    // likes: {
    //     type: Number,
    //     required: true,
    //     default: 0
    // },
    // dislikes: {
    //     type: Number,
    //     required: true,
    //     default: 0
    // },
    // usersLiked: { // ou type: [String]
    //     type: Array,
    //     required: true,
    //     default: []
    // },
    // usersDisliked: { // ou type: [String]
    //     type: Array,
    //     required: true,
    //     default: []
    // }
})


//SauceSchema.plugin(uniqueValidator); // appliquer le validator avant de créer le modèle
module.exports = mongoose.model("Sauce", SauceSchema)