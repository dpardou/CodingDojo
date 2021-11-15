const JokeController = require("../controllers/jokes.controller");

module.export = app =>{
    app.get("/api/joke", JokeController.findAllDocuments);
    app.get("/api/joke/:id", JokeController.findOneDocument);
    app.put("/api/joke/update/:id", JokeController.updateExistingDocument);
    app.post("/api/joke/new", JokeController.createNewDocument);
    app.delete("/api/joke/delete/:id", JokeController.deleteExistingDocument);

};