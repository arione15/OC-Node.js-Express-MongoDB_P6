const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/sauce');

//middleware pour enregistrer une nouvelle sauce
router.post('/', sauceCtrl.record);

//middleware pour récupérer un tableau de toutes les sauces
router.get('/', sauceCtrl.getAll);

//middleware pour récupérer une sauce précise
router.get('/:id', sauceCtrl.getOne);

//middleware pour modifier une sauce précise
router.put('/:id', sauceCtrl.getOne);

//middleware pour supprimer une sauce précise
router.delete('/:id', sauceCtrl.getOne);




module.exports = router;

