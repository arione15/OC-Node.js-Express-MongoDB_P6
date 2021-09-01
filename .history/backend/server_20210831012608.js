const http = require('http');

const server = http.createServer((req, res)=>res.end('Serveur P6'));

server.listen(process.env.PORT || 3000)