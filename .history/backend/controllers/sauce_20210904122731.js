const bcrypt = require('bcrypt');
const User = require('../models/User');
const Sauce = require('../models/Sauce');
const jwt = require('jsonwebtoken');

//les variables d'environnement
const dotenv = require("dotenv");
dotenv.config();
const MY_APP_SECRET = process.env.APP_SECRET;


/* 1- contrôleur pour enregistrer une nouvelle sauce :
 */
exports.record = 


/* 2- contrôleur pour récupérer un tableau de toutes les sauces */
exports.getAll = (req, res, next) => {


/*
randomBytes
} = await import('crypto');

const buf = randomBytes(256);

*******
https://www.tabnine.com/code/javascript/functions/crypto/randomBytes
function generateJwtSecret() {
 const jwtSecret = crypto
  .randomBytes(Math.ceil(JWT_SECRET_LENGTH / 2))
  .toString('hex') // convert to hexadecimal format
  .slice(0, JWT_SECRET_LENGTH); // return required number of characters

 return jwtSecret;
}

*/


//middleware pour récupérer une sauce précise
router.get('/:id', sauceCtrl.getOne);

//middleware pour modifier une sauce précise
router.put('/:id', sauceCtrl.modifier);

//middleware pour supprimer une sauce précise
router.delete('/:id', sauceCtrl.supprimer);

//middleware pour envoyer son avis
router.post('/:id/like', sauceCtrl.review);

