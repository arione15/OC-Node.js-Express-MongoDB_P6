const dotenv = require("dotenv");
const http = require('http');
const app = require('./app');

const MY_PORT = process.env.PORT;
const MY_APP_SECRET = process.env.APP_SECRET;

dotenv.config();



const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
//port d'écoute de l'appli express
app.set('port', process.env.PORT || 3000)

const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };



//création du serveur http et de la fonction (ici app) qui sera appelée à chaque requête faite à ce serveur
const server = http.createServer(app);

server.listen(process.env.PORT || 3000)