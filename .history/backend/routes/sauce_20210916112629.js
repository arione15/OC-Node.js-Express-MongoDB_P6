const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middlewares/authorize');
const multer = require('../middlewares/multer-config');

//middleware pour créer et enregistrer une nouvelle sauce
router.post('/', auth, multer, sauceCtrl.createSauce);

// middleware pour récupérer un tableau de toutes les sauces
router.get('/', auth, multer, sauceCtrl.getAllSauces);

// middleware pour récupérer une sauce précise
router.get('/:id', auth, multer, sauceCtrl.getSauce);

// middleware pour modifier une sauce précise
router.put('/:id', auth, multer, sauceCtrl.modify);

//middleware pour supprimer une sauce précise
router.delete('/:id', auth, multer, sauceCtrl.supprimer);

//middleware pour envoyer son avis
router.post('/:id/like', auth, multer, sauceCtrl.likeDislike);

module.exports = router;

