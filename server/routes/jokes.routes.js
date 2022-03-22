const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/test", JokesController.test);
  //   app.get("/api/jokes/", JokesController.findAllJokes);
  //   app.get("/api/jokes/:id", JokesController.findOneSingleJoke);
  //   app.put("/api/jokes/update/:id", JokesController.updateExistingJoke);
    app.post("/api/jokes/create", JokesController.createNewJoke);
  //   app.delete("/api/jokes/delete/:id", JokesController.deleteAnExistingJoke);
};

