const dotenv = require("dotenv");
const http = require('http');
const app = require(./app)

const MY_PORT = process.env.PORT;
const MY_APP_SECRET = process.env.APP_SECRET;

dotenv.config();
const server = http.createServer((req, res)=>res.end('Serveur backend P6-test de démarrage !!'));

server.listen(process.env.PORT || 3000)