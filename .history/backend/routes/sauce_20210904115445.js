const express = require('express');
const router = express.Router();
//const sauceCtrl = require('../controllers/sauce');

//middleware pour la récupération d'un tableau de toutes les sauces
router.get('/', userCtrl.signup);
//middleware pour la récupération d'une sauce  tableau de toutes les sauces
router.get('/', userCtrl.signup);

//middleware pour l'envoi d'un utilisateur existant 
router.post('/login', userCtrl.login);


module.exports = router;

