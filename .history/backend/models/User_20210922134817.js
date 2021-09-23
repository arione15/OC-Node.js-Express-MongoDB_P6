const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
// const validatePassword = function (password) {
//   const re =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   return re.test(password);
// };

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, 'email déjà utilisé'
    validate: [validateEmail, 'Veuillez renseigner un email valide !']
  },
  password: {
    type: String,
    required: true
  }
});

// ne pas la mettre içi plutot dans app.post() etc....
// function validateUser(user) {
//   const schema = Joi.object().keys({
//     password: Joi.string()
//       .min(8)
//       .required()
//       .max(30)
//       .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/), //special/number/capital
//     // ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
//     // ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$
//     });
//   return Joi.validate(user, schema);
// }

//module.exports.validate = validateUser;


userSchema.plugin(uniqueValidator); // appliquer le validator avant de créer le modèle
module.exports = mongoose.model("User", userSchema);
