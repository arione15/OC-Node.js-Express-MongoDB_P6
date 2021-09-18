const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Sauce = require("../models/Sauce");

/* 1- contrôleur pour créer et enregistrer une nouvelle sauce */
exports.createSauce = (req, res) => {
  const sauceObject = JSON.parse(req.body.sauce); //transformer "sauce" dans le body, qui en form-data, en objet json
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    },likes`,
  }); // faire une copie de l'objet sauce et rajouter éventuellement d'autres paramètres

  sauce
    .save()
    .then(() =>
      res.status(201).json({
        message: "Sauce enregistrée !",
      })
    )
    .catch(error => res.status(400).json({ error }));
};

// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//     // req.files is array of `photos` files
//     // req.body will contain the text fields, if there were any
//   })

/* 2- contrôleur pour récupérer un tableau de toutes les sauces */
exports.getAllSauces = (req, res) => {
  Sauce.find()
    .then(sauces => res.status(201).json(sauces))
    .catch(err => res.status(400).json({ err }));
};

/* 3- contrôleur pour récupérer une sauce précise */
exports.getSauce = (req, res) => {
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }));
};

/* 4- contrôleur pour modifier une sauce précise */
exports.modify = (req, res) => {
    const sauceObject = req.file ? {...JSON.parse(req.body.sauce), imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`} : {... req.body}; 
  Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
    .then(() =>
      res.status(200).json({ message: "Votre sauce a bien été modifiée !!" })
    )
    .catch(error => res.status(400).json({ error }));
};

/* 5- contrôleur pour supprimer une sauce précise */
exports.supprimer = (req, res) => {
  Sauce.deleteOne({ _id: req.params.id })
    .then(() =>
      res.status(200).json({ message: "Votre sauce a bien été supprimée !!" })
    )
    .catch(error => res.status(400).json({ error }));
};

/* 6- contrôleur pour like/dislike */
exports.likeDislike = (req, res) => {
  const userId = req.body.userId;
  const like = req.body.like;
  Sauce.findById(req.params.id)
      .then(sauce => {
          const newValues = {
              usersLiked: sauce.usersLiked,
              usersDisliked: sauce.usersDisliked,
              likes: 0,
              dislikes: 0
          }
          //like
          if (like === 1) {
              newValues.usersLiked.push(userId);
          }
          //dislike
          else if (like === -1) {
              newValues.usersDisliked.push(userId);
          }
          //annuler like/dislike
          else if (like === 0) {
              if (newValues.usersLiked.includes(userId)) {
                  // si on annule le like
                  const index = newValues.usersLiked.indexOf(userId);
                  newValues.usersLiked.splice(index, 1);
              } else {
                  // si on annule le dislike
                  const index = newValues.usersDisliked.indexOf(userId);
                  newValues.usersDisliked.splice(index, 1);
              }
          }

          //nombre de like/dislike
          newValues.likes = newValues.usersLiked.length;
          newValues.dislikes = newValues.usersDisliked.length;

          // Mise à jour de la sauce avec les nouvelles valeurs
          Sauce.updateOne({ _id: req.params.id }, newValues)
              .then(() => res.status(200).json({ message: 'Sauce notée !' }))
              .catch(error => res.status(400).json({ error }))
      })
      .catch(error => res.status(500).json({ error }))
}

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
