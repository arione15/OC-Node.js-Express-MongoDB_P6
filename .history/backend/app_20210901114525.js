const express = require("express");
const app = express();

app.use((req, res) => {
    res.json({
        message: 'Votre requête a bien été reçue !'
    });
});

app.get("/", (req, res) => {
    return res.send('Votre requête a bien été reçue !');
});


module.exports = app;