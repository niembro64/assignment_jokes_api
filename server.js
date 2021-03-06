const express = require("express");
const app = express();
const port = 9000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);
const AllMyJokesRoutes = require("./server/routes/jokes.routes");
AllMyJokesRoutes(app);



app.get("/api", (req, res) => {
    console.log("trying to talk to database");
    res.json({ assignment: "Niemo Assignment Jokes API" , port: port});
  });


app.listen(port, () => console.log(`Server running on port ${port}`));

