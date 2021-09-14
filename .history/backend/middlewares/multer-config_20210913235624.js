var path = require("path");
const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({ // storage contient notre configuration de multer
    destination: (req, file, callback) => {
        callback(null, 'images/');
    },
    filename: (req, file, callback) => { // renommer les fichiers pour éviter les doublons et remplacer les espaces par des underscores
        const name = file.originalname.split(' ').join('_');
        console.log(name);
        const extension = MIME_TYPES[file.mimetype]; // récupérer l'extension du fichier
        console.log(extension);
        callback(null, Date.now() + '.' + name + extension); // personnaliser le nouveau nom complet du fichier
    }
});


var fileName = "C:\\Python27\\ArcGIS10.2\\python.exe";
var extension = path.extname(fileName);
var file = path.basename(fileName,extension);

console.log(file); // 'python'






// autre variante :
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'images/')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })
// autre variante :
// multer.diskStorage({
//   destination: destination_url[type],
//   filename: function (req, file, callback) {
//     let fileFormat = file.mimetype.split('/');
//     callback(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);
//   }
// })

module.exports = multer({storage: storage}).single('image'); // indiquer qu'il s'agit juste de la gestion de fichier individuel d'image
/*

// autre méthode : “multer save file with extension”
var multer = require('multer');
var path = require('path')

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