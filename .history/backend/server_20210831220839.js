const dotenv = require("dotenv");
dotenv.config();
const http = require('http');

const server = http.createServer((req, res)=>res.end('Serveur backend P6'));

server.listen(process.env.PORT || 3000)