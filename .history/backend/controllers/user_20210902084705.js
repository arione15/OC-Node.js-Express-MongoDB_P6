const userCtrl = 

const signup = (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé !'
    });
};


module.exports= userCtrl;
