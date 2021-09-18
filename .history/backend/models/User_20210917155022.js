const Joi = require('@hapi/joi');
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const validatePassword = function(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password)
};

const userSchema = new mongoose.Schema({
email: {
    type: String,
    required: true,
    unique: true,
    ////lowercase: true,
    validate: [validateEmail, 'Veuillez renseigner un email valide !'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
},
password: {
    type: String,
    required: true,
    unique: true,

},
});

userSchema.plugin(uniqueValidator); // appliquer le validator avant de créer le modèle
module.exports = mongoose.model('User', userSchema);