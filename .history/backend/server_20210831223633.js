const dotenv = require("dotenv");
const http = require('http');

const MY_PORT = process.env.PORT;
const MY_APP_SECRET = process.env.APP_SECRET;

dotenv.config();
const server = http.createServer((req, res)=>res.end('Serveur backend P6-'));

server.listen(process.env.PORT || 3000)