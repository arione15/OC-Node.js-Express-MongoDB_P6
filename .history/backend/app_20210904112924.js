const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');


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

  const app = express();
//Middleware pour CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


//définir la fonction json de express comme middleware global pour l'application
app.use(express.json());

app.use('/api/auth', userRoutes)

module.exports = app;