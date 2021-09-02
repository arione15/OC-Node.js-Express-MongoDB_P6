const express = require('express');
const router = express.Router();
const userCtrl = require('./controllers/user');

//middleware pour l'envoi da route post
router.post('/signup', userCtrl.signup);

//middleware pour la route 
router.post('/login', userCtrl.login);

module.exports = router;