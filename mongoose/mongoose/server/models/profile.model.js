const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const perfilSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	fechaCreacion: {
		type: Schema.Types.Date,
		default: Date.now()
	},
    fechaActualización: {
		type: Schema.Types.Date,
        default: Date.now()
	},
    estado: {
		type: Number,
		required: true
	},
    usuarioCreador: { 
        type: Schema.ObjectId, 
        ref: "Usuario" 
    } 
});

const Perfil = mongoose.model("Perfil", perfilSchema);

module.exports = Perfil;