const express = require("express");
const app = express();
const mongoose = require('mongoose');

//les variables d'environnement
const dotenv = require("dotenv");
dotenv.config();
const MY_PORT = process.env.PORT;
const MY_APP_SECRET = process.env.APP_SECRET;

//Connexion à mongoDB Atlas via mangoose
mongoose.connect('mongodb+srv://massine15:5YZB751uLJDkn2Tw@oc-p6.oi0ad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Middleware pour CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use((req, res, next) => {
    res.json({
        message: 'Votre requête a bien été reçue ! ${MY_PORT}'
    });
    next();
});

// app.get("/", (req, res, next) => {
//   return res.send(MY_APP_SECRET);
//   next();
// });
//app.listen(MY_PORT, () => console.log(`Serveuuuuurr running on port ${MY_PORT}`));

module.exports = app;