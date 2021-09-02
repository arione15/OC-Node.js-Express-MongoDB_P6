const userCtrl = 

exports.signup = (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé !'
    });
};

exports.login = (req, res, next) => {
    
};


module.exports= userCtrl;
