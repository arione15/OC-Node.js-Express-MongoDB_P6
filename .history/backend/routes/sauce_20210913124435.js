const express = require('express');
const sauceRoutes = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

//middleware pour créer et enregistrer une nouvelle sauce
sauceRoutes.post('/', multer, sauceCtrl.createSauce);

// middleware pour récupérer un tableau de toutes les sauces
sauceRoutes.get('/', multer, sauceCtrl.getAllSauces);

// middleware pour récupérer une sauce précise
sauceRoutes.get('/:id', multer, sauceCtrl.getSauce);

// middleware pour modifier une sauce précise
sauceRoutes.put('/:id', multer, sauceCtrl.modify);

//middleware pour supprimer une sauce précise
// sauceRoutes.delete('/:id', auth, sauceCtrl.supprimer);

// //middleware pour envoyer son avis
// sauceRoutes.post('/:id/like', auth, sauceCtrl.review);

module.exports = sauceRoutes;

