const bcrypt = require('bcrypt');
const User = require('../models/User');
const Sauce = require('../models/Sauce');
const jwt = require('jsonwebtoken');

//les variables d'environnement
const dotenv = require("dotenv");
dotenv.config();
const MY_APP_SECRET = process.env.APP_SECRET;


/* 1- contrôleur pour enregistrer une nouvelle sauce  */
exports.record = 

/* 2- contrôleur pour récupérer un tableau de toutes les sauces */
exports.getAll = (req, res, next) => {

/* 3- contrôleur pour récupérer une sauce précise */
exports.getOne = (req, res, next) => {

/* 4- contrôleur pour modifier une sauce précise */
exports.modifier = (req, res, next) => {

/* 5- contrôleur pour supprimer une sauce précise */
exports.supprimer = (req, res, next) => {

/* 6- contrôleur pour envoyer son avis */
exports.review = (req, res, next) => {

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
