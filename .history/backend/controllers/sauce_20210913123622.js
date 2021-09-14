const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Sauce = require('../models/Sauce');



/* 1- contrôleur pour créer et enregistrer une nouvelle sauce */
exports.createSauce = (req, res) => {
    const sauceObject = JSON.parse(req.body.sauce); //transformer "sauce" dans le body, qui en form-data, en objet json 
    const sauce = new Sauce({ // faire une copie de l'objet sauce et rajouter d'autres paramètres (imageUrl)
        ...sauceObject,
        userId: req.bodyuserId
        // name:
        // manufacturer: ,
        // description: ,
        // mainPepper: ,
        // heat: ,
        // //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        // likes: 0,
        // dislikes: 0,
        // usersLiked: [],
        // usersDisliked: [],
    })
    sauce.save()
    .then(() => res.status(201).json({
        message: 'Sauce enregistrée !'
    }))
    .catch(error => res.status(400).json({
        message: 'Il y a un problème !!'
    }));
}

/* 2- contrôleur pour récupérer un tableau de toutes les sauces */
exports.getAllSauces = (req, res) => {
    Sauce.find()
    .then(sauces => res.status(201).json(sauces))
    .catch(err => res.status(400).json({ err }));
};

/* 3- contrôleur pour récupérer une sauce précise */
exports.getSauce = (req, res) => {
    Sauce.findOne({"_id": req.params.id})
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }));
};

/* 4- contrôleur pour modifier une sauce précise */
exports.modify = (req, res) => {
    Sauce.updateOne({"_id": req.params.id}, {...req.body, "_id": req.params.id})
    .then(() => res.status(200).json({"message": "Votre sauce a bien été modifiée !!"}))
    .catch((error) => res.status(404).json({ error }));
};


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