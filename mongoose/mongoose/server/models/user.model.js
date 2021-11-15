const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: [true, "El campo nombre es requerido"]
	},
	apPaterno: {
		type: String,
		required: [true, "El campo apPaterno es requerido"]
	},
	apMaterno: {
		type: String,
		required: [true, "El campo apMaterno es requerido"]
	},
	email: {
		type: String,
		required: [true, "El campo email es requerido"]
	},
	password: {
		type: String,
		required: [true, "El campo password es requerido"]
	},
	telefono: {
		type: String,
	},
	perfil: { 
        //type: Schema.ObjectId, 
        //ref: "Perfil",
		type: String,
		required: [true, "Debe asignar un perfil al usuario"]
    }, 
    estado: {
		type: Number,
		required: [true, "El campo estado es requerido"]
	},
}, {timestamps: true}); //timestamps registra fechas de creación y actualización del registro

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;