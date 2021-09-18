const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validateEmail, 'Please fill a valid email address']
},
password: {
    type: String,
    required: true,
    trim: true,
    minLength: [8, 'Votre mot de passe est court !'],
    maxLength: [30, 'Votre mot de passe est trop long !'],
    match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Please fill a valid email address'] // Huit caractères au moins, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial:
        // ou cette regex : ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
},
});

userSchema.plugin(uniqueValidator); // appliquer le validator avant de créer le modèle
module.exports = mongoose.model('User', userSchema);