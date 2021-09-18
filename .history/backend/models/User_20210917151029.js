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
    
    minLength: [8, 'Votre mot de passe est court ! Il faut 8 caractères au minimum !'],
    maxLength: [30, 'Votre mot de passe est trop long, ne pas dépasser 30 caractères !'],
    validate: [validatePassword, 'Veuillez renseigner un mot de passe valide !'],
    match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Veuillez choisir un mot de passe valide ! (Huit caractères au moins, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.)'] // 
        // ou cette regex : ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
},
});

userSchema.plugin(uniqueValidator); // appliquer le validator avant de créer le modèle
module.exports = mongoose.model('User', userSchema);