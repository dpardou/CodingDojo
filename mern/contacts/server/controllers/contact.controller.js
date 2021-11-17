const Contact = require("../models/contact.model");

//Crear un nuevo documento
module.exports.create = (req, res) => {
  Contact.create(req.body)
    .then(newDocument => res.status(200).json({ok: true, message: "Contacto creado correctamente", contact: newDocument }))
    .catch(err => {
      console.log("CREATE DOCUMENT", err);
      if ( err.name === "ValidationError") {
        res.status(500).json({ok: false, message: err.message, error: err})
      } else {
        res.status(500).json({ok: false, message: "Ha ocurrido un problema al crear el Documento"})
      }
    });
}

//Actualizar un Documento
module.exports.update = (req, res) => {
	Contact.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then(updateContact => res.status(200).json({ok: true, message: "Documento actualizado correctamente", contact: updateContact }))
		.catch(err => {
      console.log("UPDATE PROFILE", err);
      if ( error.name === "ValidationError ") {
        res.status(500).json({ok: false, message: err.message, error: err})
      } else {
        res.status(500).json({ok: false, message: "Ha ocurrido un problema al actualizar el Documento"})
      }
    });
}


//Buscar un Documento específico por _ID
module.exports.get = (req, res) => {
	Contact.findById({_id: req.params.id })
		.then(findOneSingleDocument => res.status(200).json({ok: true, message: "Documento encontrado", contact: findOneSingleDocument }))
		.catch(err => {
      console.log("FIND ONE SINGLE DOCUMENT", err);
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al obtener el Documento"})
    });
}


//Buscar todos los Documentos
module.exports.getAll = (req, res) => {
	Contact.find()
		.then(findAllDocument => res.status(200).json({ok: true, message: "Listado de Documentos encontrado", contacts: findAllDocument }))
		.catch(err => {
      console.log("FIND LIST DOCUMENT", err);
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al obtener el listado de Documentos"})
    });
}

//Eliminar un Documento
module.exports.delete = (req, res) => {
	Contact.deleteOne({ _id: req.params.id })
		.then(deleteDocument => res.status(200).json({ok: true, message: "Documento eliminado correctamente", contact: deleteDocument }))
		.catch(err => {
      console.log("DELETE DOCUMENT", err);
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al eliminar el Documento"})
    });
}