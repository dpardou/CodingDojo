const UserController = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api/users/", UserController.getAll);
  app.get("/api/users/:id", UserController.get);
  app.put("/api/users/update/:id", UserController.update);
  app.post("/api/users/new", UserController.create);
  app.delete("/api/users/delete/:id", UserController.delete);
};