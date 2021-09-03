const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => { // renommer les fichiers pour éviter les doublons et remplacer les espaces par des underscores
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype]; // récupérer l'extension du fichier
        callback(null, name + Date.now() + '.' + extension); // 
    }
});

module.exports = multer({storage: storage}).single('image');