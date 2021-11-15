const JokeController = require("../controllers/jokes.controller");

module.export = app =>{
    app.get("/api/jokes", JokeController.findAllDocuments);
    app.get("/api/jokes/:id", JokeController.findOneDocument);
    app.put("/api/jokes/update/:id", JokeController.updateExistingDocument);
    app.post("/api/jokes/new", JokeController.createNewDocument);
    app.delete("/api/users/delete/:id", JokeController.deleteExistingDocument);

};