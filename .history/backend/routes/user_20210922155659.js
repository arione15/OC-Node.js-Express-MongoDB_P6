const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//middleware qui gère le post d'un nouvel utilisateur
router.post('/signup', userCtrl.signup);

//middleware pour l'envoi d'un utilisateur existant 
router.post('/login', userCtrl.login);


module.exports = router;