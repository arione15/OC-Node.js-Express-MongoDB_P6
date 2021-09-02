const express = require('express');
const router = express.Router();
const userCtrl = require('./controllers/user');

//middleware pour la route post
router.post('/signup', userCtrl.signup);

//middleware pour la route get
router.post('/login', userCtrl.login);

module.exports = router;