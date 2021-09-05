const bcrypt = require('bcrypt');
const User = require('../models/User');
const Sauce = require('../models/Sauce');
const jwt = require('jsonwebtoken');

//les variables d'environnement
const dotenv = require("dotenv");
dotenv.config();
const MY_APP_SECRET = process.env.APP_SECRET;


router.post('/', sauceCtrl.);
/* contrôleur pour enregistrer une nouvelle sauce :
1- crypter le mdp, 2- créer nouvel user, 3- l'enregistrer dans la BDD */
exports.signup = 


/* contrôleur pour la vérification d'un utilisateur enregistré et 
l'envoi d'un token avec un payload (ici le userId) */
exports.login = (req, res, next) => {


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



//middleware pour récupérer un tableau de toutes les sauces
router.get('/', sauceCtrl.getAll);

//middleware pour récupérer une sauce précise
router.get('/:id', sauceCtrl.getOne);

//middleware pour modifier une sauce précise
router.put('/:id', sauceCtrl.modifier);

//middleware pour supprimer une sauce précise
router.delete('/:id', sauceCtrl.supprimer);

//middleware pour envoyer son avis
router.post('/:id/like', sauceCtrl.review);

