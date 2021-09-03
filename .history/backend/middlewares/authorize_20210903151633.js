const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // récupérer le token (dans la console en-tête HTTP "Authorization: Bearer [Token]")
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // décoder le token à l'aide du code secret ==> le résultat du décodage est un objet js classique
        const userId = decodedToken.userId; // extraction du userId du token décodé
        if (req.body.userId && req.body.userId !== userId) { // vérifier s
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};
