const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require("helmet");

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
const fs = require('fs');
const path = require('path');

//les variables d'environnement
const dotenv = require("dotenv");
dotenv.config();

//Connexion à mongoDB Atlas via mangoose
mongoose.connect(process.env.DB_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// middleware pour gérer le CORS Cross Origin Resource Sharing (ajoute des headers à l'objet response qui permet à des requetes de différentes rigines de communiquer entre elles)
app.use(cors());

//définir la fonction json de express comme middleware global pour l'application
app.use(express.json());

// Data "sanization" des données contre les injections  against NoSQL injection
app.use(mongoSanitize()); // filtre les signes tels que ., $ etc .. de req body, req query string et req.params

// Data sanization against XSS 
app.use(helmet());


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;