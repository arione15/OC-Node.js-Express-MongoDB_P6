const http = require('http');

const server = http.createServer((req, res)=>res.end('coucou'));

server.listen(process.env.PORT ||)