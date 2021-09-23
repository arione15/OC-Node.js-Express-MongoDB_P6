const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'Veuillez renseigner un email valide !']
  },
  password: {
    type: String,
    required: true
  }
});




userSchema.plugin(uniqueValidator); // appliquer le validator avant de créer le modèle
module.exports = mongoose.model("User", userSchema);
