const express = require('express');
const sauceRoutes = express.Router();
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middlewares/auth');

//middleware pour créer et enregistrer une nouvelle sauce
router.post('/', auth, sauceCtrl.createSauce);

//middleware pour récupérer un tableau de toutes les sauces
router.get('/', auth, sauceCtrl.getAll);

//middleware pour récupérer une sauce précise
router.get('/:id', auth, sauceCtrl.getOne);

//middleware pour modifier une sauce précise
router.put('/:id', auth, sauceCtrl.modifier);

//middleware pour supprimer une sauce précise
router.delete('/:id', auth, sauceCtrl.supprimer);

//middleware pour envoyer son avis
router.post('/:id/like', auth, sauceCtrl.review);




module.exports = SauceRoutes;

