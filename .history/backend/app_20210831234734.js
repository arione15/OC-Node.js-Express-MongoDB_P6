const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const MY_PORT = process.env.PORT;
const MY_APP_SECRET = process.env.APP_SECRET;


app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });
 
app.get("/", (req, res) => {
    return res.send(MY_APP_SECRET);
});

app.listen(MY_PORT, () => console.log(`Server running on port ${MY_PORT}`));

module.exports = app;