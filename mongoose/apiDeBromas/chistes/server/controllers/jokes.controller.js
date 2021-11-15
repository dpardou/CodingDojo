const Joker = require ("../models/jokes.model");

//Obtener todos los documentos
module.exports.findAllDocuments = (req, res) => {
	Joker.find()
		.then(allJokes => res.status(200).json({ok: true, message: "Listado encontrado satisfactoriamente", jokes: allJokes }))
		.catch(err => {
      console.log("FindAllDocuments", err);//Si ocurre error, se envía error a la consola y no al front.
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al obtener el listado de chistes"})
    });
}


//Obtener un documento específico
module.exports.findOneDocument = (req, res) => {
	Joker.findOne({ _id: req.params.id })
		.then(OneSingleJoke => res.status(200).json({ok: true, message: "Documento encontrado satisfactoriamente", joke: OneSingleJoke  }))
		.catch(err => {
      console.log("FindOneSingleDocument", err);//Si ocurre error, se envía error a la consola y no al front.
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al obtener el documento"})
    });
}

//Crear un nuevo documento
module.exports.createNewDocument = (req, res) => {
    Joker.create(req.body)
      .then(newJoke => res.status(200).json({ok: true, message: "Documento creado correctamente", joke: newJoke }))
      .catch(err => {
        console.log("CreateNewDocument", err);//Si ocurre error, se envía error a la consola y no al front.
        if ( error.name === "ValidationError ") {
            res.status(500).json({ok: false, message: error.message, error: err})
          } else {
            res.status(500).json({ok: false, message: "Ha ocurrido un problema al crear el documento"})
        }
      });
  }

//Buscar un documento por ID y actualizar
module.exports.updateExistingDocument = (req, res) => {
	Joker.findOneAndUpdate({_id: req.params.id }, req.body, {new: true})
		.then(findJoke => res.status(200).json({ok: true, message: "Documento encontrado y actualizado correctamente", joke: findJoke }))
		.catch(err => {
      console.log("UpdateExistingDocument", err);//Si ocurre error, se envía error a la consola y no al front.
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al obtener el documento"})
    });
}

//Eliminar un documento
module.exports.deleteExistingDocument = (req, res) => {
	Joker.deleteOne({ _id: req.params.id })
		.then(deleteJoke => res.status(200).json({ok: true, message: "Documento eliminado correctamente", chiste: deleteJoke }))
		.catch(err => {
      console.log("DeleteExistingDocument", err);//Si ocurre error, se envía error a la consola y no al front.
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al eliminar el documento"})
    });
}