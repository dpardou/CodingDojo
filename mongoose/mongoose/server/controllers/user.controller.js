const Usuario = require("../models/user.model");

//Crear un nuevo usuario
module.exports.create = (req, res) => {
  const usuario = req.body;
  Usuario.create(usuario)
    .then(nuevoUsuario => res.status(200).json({ok: true, message: "Usuario creado correctamente", usuario: nuevoUsuario }))
    .catch(err => {
      console.log("CREATE USER", err);//Si ocurre error, se envía error a la consola y no al front.
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al crear el usuario"})
    });
}

//Actualizar un usuario
module.exports.update = (req, res) => {
	Usuario.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then(actualizarUsuario => res.status(200).json({ok: true, message: "Usuario actualizado correctamente", usuario: actualizarUsuario }))
		.catch(err => {
      console.log("UPDATE USER", err);//Si ocurre error, se envía error a la consola y no al front.
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al actualizar el usuario"})
    });
}


//Buscar un usuario específico por _ID
module.exports.get = (req, res) => {
	Usuario.findById({_id: req.params.id })
		.then(buscarUsuario => res.status(200).json({ok: true, message: "Usuario encontrado", usuario: buscarUsuario }))
		.catch(err => {
      console.log("FIND USER", err);//Si ocurre error, se envía error a la consola y no al front.
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al obtener el usuario"})
    });
}

//Buscar todos los usuarios
module.exports.getAll = (req, res) => {
	Usuario.find()
		.then(buscarUsuarios => res.status(200).json({ok: true, message: "Listado de Usuarios encontrado", usuarios: buscarUsuarios }))
		.catch(err => {
      console.log("FINDLIST USERS", err);//Si ocurre error, se envía error a la consola y no al front.
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al obtener el listado de usuarios"})
    });
}

//Eliminar un usuario
module.exports.delete = (req, res) => {
	Usuario.deleteOne({ _id: req.params.id })
		.then(eliminarUsuario => res.status(200).json({ok: true, message: "Usuario eliminado correctamente", usuario: eliminarUsuario }))
		.catch(err => {
      console.log("DELETE USER", err);//Si ocurre error, se envía error a la consola y no al front.
      res.status(500).json({ok: false, message: "Ha ocurrido un problema al eliminar el usuario"})
    });
}
/*
//Buscar todos los usuarios
module.exports.findAllUsers = (req, res) => {
  Usuario.find()
    .then(allDaUsers => res.json({ usuarios: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


//Buscar un usuario específico por _ID
module.exports.findOneSingleUser = (req, res) => {
	Usuario.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ usuario: oneSingleUser }))
		.catch(err => res.json({ message: "Ha ocurrido un problema", error: err }));
};


//Crear un nuevo usuario
module.exports.createNewUser = (req, res) => {
  Usuario.create(req.body)
    .then(newlyCreatedUser => res.json({ usuario: newlyCreatedUser }))
    .catch(err => res.json({ message: "Ha ocurrido un problema", error: err }));
};

//Actualizar el documento de un usuario existente
module.exports.updateExistingUser = (req, res) => {
  Usuario.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ usuario: updatedUser }))
    .catch(err => res.json({ message: "Ha ocurrido un problema", error: err }));
};

//Eliminar un usuario existente
module.exports.deleteAnExistingUser = (req, res) => {
  Usuario.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Ha ocurrido un problema", error: err }));
};
*/
