const bcrypy = require('bcrypt');
const User = require('../models/User');

/* 
contrôleur pour l'enregistrement d'un nouvel utilisateur :
1- crypter le mdp, 2- créer nouvel user, 3- l'enregistrer dans la BDD 
 */
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

// contrôleur pour la vérification d'un utilisateur enregistré et l'envoi d'un token avec un payload (ici le userId)
exports.login = (req, res, next) => {
    User.findOne({
            email: req.body.email //query filter de mongoose (trouver un user dans la BDD dont l'email correspond à ce qui été envoyé dans le body de la requête)
        })
        .then(user => { //la résolution de la promesse envoie un user
            if (!user) {
                return res.status(401).json({
                    error: 'Utilisateur non trouvé !'
                });
            }// si on a trouvé un user avec le bon email alors on compare les hash des mdp :
            bcrypt.compare(req.body.password, user.password) 
                .then(valid => { // la résolution de la promesse envoie un booléen
                    if (!valid) {
                        return res.status(401).json({ //401 : unauthorized
                            error: 'Mot de passe incorrect !'
                        });
                    }
                    res.status(200).json({ //si la comparaison est valide, 
                        userId: user._id,
                        token: 'TOKEN'
                    });
                })
                .catch(error => res.status(500).json({
                    error
                }));
        })
        .catch(error => res.status(500).json({
            error
        }));
};