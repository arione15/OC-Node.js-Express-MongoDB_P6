const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // récupérer le token (dans la console en-tête HTTP "Authorization: Bearer [Token]")
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // décoder le token 
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
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
