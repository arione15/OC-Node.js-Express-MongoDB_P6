const dotenv = require("dotenv");
const http = require('http');
const app = require('./app');

const MY_PORT = process.env.PORT;
const MY_APP_SECRET = process.env.APP_SECRET;

dotenv.config();

//port d'écoute de l'appli express
app.set('port', process.env.PORT || 3000)
//création du serveur htt
const server = http.createServer(app);

server.listen(process.env.PORT || 3000)