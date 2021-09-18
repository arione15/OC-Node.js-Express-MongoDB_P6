const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const Joi = require('joi'); //  validate the password in client side


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


},
});


function validateUser(user) {
    const schema = Joi.object().keys({
      email: Joi.string()
        .min(8)
        .max(50)
        .required()
        .email(),
      password: Joi.string()
        .min(6)
        .required()
        .max(20)
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/) //special/number/capital
    });
    return Joi.validate(user, schema);
  }
  
  module.exports.User = User;
  module.exports.validate = validateUser;
  
  



userSchema.plugin(uniqueValidator); // appliquer le validator avant de créer le modèle
module.exports = mongoose.model('User', userSchema);