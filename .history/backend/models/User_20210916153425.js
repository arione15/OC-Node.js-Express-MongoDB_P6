const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
email: {
    type: String,
    required: 'Email address is obligatoire'true,
    unique: true,

},
password: {type: String, required: true},
});

userSchema.plugin(uniqueValidator); // appliquer le validator avant de créer le modèle
module.exports = mongoose.model('User', userSchema);