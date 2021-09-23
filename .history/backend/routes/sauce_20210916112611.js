const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middlewares/authorize');
const multer = require('../middlewares/multer-config');

//middleware pour créer et enregistrer une nouvelle sauce
router.post('/', authmulter, sauceCtrl.createSauce);

// middleware pour récupérer un tableau de toutes les sauces
router.get('/', multer, sauceCtrl.getAllSauces);

// middleware pour récupérer une sauce précise
router.get('/:id', multer, sauceCtrl.getSauce);

// middleware pour modifier une sauce précise
router.put('/:id', multer, sauceCtrl.modify);

//middleware pour supprimer une sauce précise
router.delete('/:id', multer, sauceCtrl.supprimer);

//middleware pour envoyer son avis
router.post('/:id/like', multer, sauceCtrl.likeDislike);

module.exports = router;
