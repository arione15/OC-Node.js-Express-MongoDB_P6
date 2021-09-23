const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
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

app.use(cors());


//définir la fonction json de express comme middleware global pour l'application
app.use(express.json());

// Data sanization against NoSQL injection
app.use(mongoSanitize()); // filtre les signes tels que ., $ etc .. de req body, req query string et req.params

// Data sanization against XSS 
app.use(helmet());


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;