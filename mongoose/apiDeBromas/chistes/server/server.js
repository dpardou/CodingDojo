const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("../server/config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }));


app.listen(8000, () => console.log("Servidor corriendo en el puerto 8000"));

module.exports = app;