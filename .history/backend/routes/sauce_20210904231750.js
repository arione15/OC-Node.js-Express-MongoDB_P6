const express = require('express');
const sauceRoutes = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middlewares/auth');
const multer = require('multer');

//middleware pour créer et enregistrer une nouvelle sauce
sauceRoutes.post('/', multer, sauceCtrl.createSauce);

// middleware pour récupérer un tableau de toutes les sauces
sauceRoutes.get('/', auth, sauceCtrl.getAllSauces);

// //middleware pour récupérer une sauce précise
sauceRoutes.get('/:id', auth, sauceCtrl.getSauce);

// //middleware pour modifier une sauce précise
// sauceRoutes.put('/:id', auth, sauceCtrl.modifier);

// //middleware pour supprimer une sauce précise
// sauceRoutes.delete('/:id', auth, sauceCtrl.supprimer);

// //middleware pour envoyer son avis
// sauceRoutes.post('/:id/like', auth, sauceCtrl.review);

module.exports = sauceRoutes;

