const app = express();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

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


// //Middleware pour CORS
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

const corsOptions = {
  origin: "http://localhost:8081"
  };
app.use(cors(corsOptions));

// middleware pour transformer le corps de la requête en un format utilisable
//app.use(bodyParser.json());

//définir la fonction json de express comme middleware global pour l'application
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;