const ContactController = require("../controllers/contact.controller");

module.exports = app => {
  app.get("/api/contact/", ContactController.getAll);
  app.get("/api/contact/:id", ContactController.get);
  app.put("/api/contact/update/:id", ContactController.update);
  app.post("/api/contact/new", ContactController.create);
  app.delete("/api/contact/delete/:id", ContactController.delete);
};