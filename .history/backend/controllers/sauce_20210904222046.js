const bcrypt = require('bcrypt');
const User = require('../models/User');
const Sauce = require('../models/Sauce');
const jwt = require('jsonwebtoken');

/* 1- contrôleur pour créer et enregistrer une nouvelle sauce */
exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce); //transformer "sauce" dans le body, qui en form-data, en objet json 
    delete sauceObject.id; //car cet id est inutile, la BDD va lui donner un autre de toute façon
    const sauce = new Sauce({ // faire une copie de l'objet sauce et rajouter d'autres paramètres (imageUrl)
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: []
    })
    sauce.save()
        .then(() => res.status(201).json({
            message: 'Sauce enregistrée !'
        }))
        .catch(error => res.status(400).json({
            message: 'Sauce enregistrée !'
        }));
}

/* 2- contrôleur pour récupérer un tableau de toutes les sauces */
//exports.getAll = (req, res, next) => {
















    
// /* 3- contrôleur pour récupérer une sauce précise */
// exports.getOne = (req, res, next) => {

// /* 4- contrôleur pour modifier une sauce précise */
// exports.modifier = (req, res, next) => {

// /* 5- contrôleur pour supprimer une sauce précise */
// exports.supprimer = (req, res, next) => {

// /* 6- contrôleur pour envoyer son avis */
// exports.review = (req, res, next) => {



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