const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Joi = require("joi"); //  validate the password in client side

//les variables d'environnement
const dotenv = require("dotenv");
dotenv.config();
const MY_APP_SECRET = process.env.APP_SECRET;

/* contrôleur pour l'enregistrement d'un nouvel utilisateur :
1- crypter le mdp, 2- créer nouvel user, 3- l'enregistrer dans la BDD */
exports.signup = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string() .min(6) .required() .email(),
    password: Joi.string()
      .min(8)
      .required()
      .max(30)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ), //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error);
  } else {
    bcrypt
      .hash(req.body.password, 10) // c'est une Promise dont la résolution est le hash généré
      .then((hash) => {
        const user = new User({
          email: req.body.email,
          password: hash,
        });
        user
          .save()
          .then(() =>
            res.status(201).json({
              message: "Utilisateur créé !",
            })
          )
          .catch((error) =>
            res.status(400).json({
              error,
            })
          );
      })
      .catch((error) =>
        res.status(500).json({
          error,
        })
      );
  }
};

/* contrôleur pour la vérification d'un utilisateur enregistré et 
l'envoi d'un token avec un payload (ici le userId) */
exports.login = (req, res, next) => {
  User.findOne({
    email: req.body.email, //query filter de mongoose (trouver un user dans la BDD dont l'email correspond à ce qui été envoyé dans le body de la requête)
  })
    .then((user) => {
      //la résolution de la promesse envoie un user
      if (!user) {
        return res.status(401).json({
          error: "Utilisateur non trouvé !",
        });
      } // si on a trouvé un user avec le bon email alors on compare les hash des mdp :
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          // la résolution de la promesse envoie un booléen
          if (!valid) {
            return res.status(401).json({
              //401 : unauthorized
              error: "Mot de passe incorrect !",
            });
          } //si la comparaison est valide, on répond par l'envoi du token et du userId qui va avec
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              {
                userId: user._id, //encoder le userId dans le token pour éviter qu'un user modifie des données d'un autre user
              },
              MY_APP_SECRET,
              {
                expiresIn: "24h",
              }
            ),
          });
        })
        .catch((error) =>
          res.status(500).json({
            error,
          })
        );
    })
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
};

/*
randomBytes
} = await import('crypto');

const buf = randomBytes(256);

*******
https://www.tabnine.com/code/javascript/functions/crypto/randomBytes
function generateJwtSecret() {
 const jwtSecret = crypto
  .randomBytes(Math.ceil(JWT_SECRET_LENGTH / 2))
  .toString('hex') // convert to hexadecimal format
  .slice(0, JWT_SECRET_LENGTH); // return required number of characters

 return jwtSecret;
}

*/
