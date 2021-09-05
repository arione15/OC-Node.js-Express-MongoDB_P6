const multer = require('multer');

const MIME_TYPES = {
    'image/jpeg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({ // storage contient notre configuration de multer
    destination: (req, file, callback) => {
        callback(null, 'images/');
    },
    filename: (req, file, callback) => { // renommer les fichiers pour éviter les doublons et remplacer les espaces par des underscores
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype]; // récupérer l'extension du fichier
        callback(null, name + Date.now() + '.' + extension); // personnaliser le nouveau nom complet du fichier
    }
});

module.exports = multer({storage: storage}).single('image'); // indiquer qu'il s'agit juste de la gestion de fichier individuel d'image