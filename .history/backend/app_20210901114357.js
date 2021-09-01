const express = require("express");
const app = express();

app.use((req, res) => {
    res.json({
        message: 'Votre requête a bien été reçue !'
    });
});

app.get("/", (req, res) => {
    return res.send(MY_APP_SECRET);
});

server.listen(MY_PORT, () => console.log(`Server running on port ${MY_PORT}`));

module.exports = app;