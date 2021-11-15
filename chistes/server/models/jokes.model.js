const mongoose = require("mongoose");


const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "El campo 'setup' es requerido"]
	},

    punchline: {
		type: Number,
		required: [true, "El campo 'punchline' es requerido"]
	},
}, {timestamps: true}); //timestamps registra fechas de creación y actualización del registro

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;