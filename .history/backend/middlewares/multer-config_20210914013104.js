const multer = require('multer');
var path = require("path");

const storage = multer.diskStorage({ // storage contient notre configuration de multer
    destination: (req, file, callback) => {
        callback(null, 'images/');
    },
    filename: (req, file, callback) => { // renommer les fichiers pour éviter les doublons et remplacer les espaces par des underscores
        const name = file.originalname.split(' ').join('_');
        console.log(name);
        const extension = path.extname(name); // récupérer l'extension du fichier
        console.log(extension);
        const fichier = path.basename(name,extension);
        callback(null, Date.now() + '.' + fichier + extension); // personnaliser le nouveau nom complet du fichier
    }
});

module.exports = multer({storage: storage}).single('image'); // indiquer qu'il s'agit juste de la gestion de fichier individuel d'image

/*
// autre méthode : “multer save file with extension”
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})
var upload = multer({ storage: storage });

*/