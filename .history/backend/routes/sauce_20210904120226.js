const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/sauce');

//middleware pour la récupération d'un tableau de toutes les sauces
router.get('/', sauceCtrl.getAll);
//middleware pour la récupération d'un tableau de toutes les sauces
router.get('/', sauceCtrl.getAll);

//middleware pour la récupération d'une sauce précise
router.get('/:id', sauceCtrl.getOne);




module.exports = router;

