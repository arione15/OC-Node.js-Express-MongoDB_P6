const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
// roles: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Role"
//     }
//   ]
});

userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' }); // appliquer le validator avant de créer le modèle
module.exports = mongoose.model('User', userSchema);