const bcrypy = require('bcrypt');
const User = require('../models/User');

// contrôleur pour l'enregistrment d'un nouvel utilisateur
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) // c'est une Promise dont la résolution est le hash généré
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({
                    message: 'Utilisateur créé !'
                }))
                .catch(error => res.status(400).json({
                    error
                }));
        })
        .catch(error => res.status(500).json({
            error
        }));
};

// contrôleur pour un utilisateur enregistré
exports.login = (req, res, next) => {

};