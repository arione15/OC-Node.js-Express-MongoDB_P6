const dotenv = require("dotenv");
const http = require('http');

dotenv.config();
const server = http.createServer((req, res)=>res.end('Serveur backend P6'));

server.listen(process.env.PORT || 3000)