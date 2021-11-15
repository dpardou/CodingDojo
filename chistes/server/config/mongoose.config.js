const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_database", {

})
	.then(() => console.log("Conexión establecida correctamente con la base de datos"))
	.catch(err => console.log("Ocuriio un error al intentar conectarse al a base de datos", err));