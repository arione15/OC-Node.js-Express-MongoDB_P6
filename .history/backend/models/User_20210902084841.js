const mongoose = require("mongoose");
const uniqueValidator = require('uni')
const userSchema = new mongoose.Schema({
email: {type: String, required: true, unique: true},
password: {type: String, required: true}    
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);