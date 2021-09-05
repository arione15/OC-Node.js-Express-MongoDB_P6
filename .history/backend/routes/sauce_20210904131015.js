const express = require('express');
const sauceRoutes = express.Router();
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middlewares/auth');

//middleware pour créer et enregistrer une nouvelle sauce
router.post('/', authsauceCtrl.createSauce);

//middleware pour récupérer un tableau de toutes les sauces
router.get('/', authsauceCtrl.getAll);

//middleware pour récupérer une sauce précise
router.get('/:id', authsauceCtrl.getOne);

//middleware pour modifier une sauce précise
router.put('/:id', authsauceCtrl.modifier);

//middleware pour supprimer une sauce précise
router.delete('/:id', authsauceCtrl.supprimer);

//middleware pour envoyer son avis
router.post('/:id/like', authsauceCtrl.review);




module.exports = SauceRoutes;

