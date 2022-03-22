const Joke = require("../models/jokes.model");

module.exports.test = (req, res) => {
  Joke.find()
    .then(res.json({ joke: "test joke" }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findAllJokes = (req, res) => {
    Joke.find()
      .then(allJokes => res.json({ joke: allJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

//   module.exports.findOneSingleUser = (req, res) => {
//       User.findOne({ _id: req.params.id })
//           .then(oneSingleUser => res.json({ user: oneSingleUser }))
//           .catch(err => res.json({ message: "Something went wrong", error: err }));
//   };

  module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
      .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

//   module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//       .then(updatedUser => res.json({ user: updatedUser }))
//       .catch(err => res.json({ message: "Something went wrong", error: err }));
//   };

//   module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//       .then(result => res.json({ result: result }))
//       .catch(err => res.json({ message: "Something went wrong", error: err }));
//   };
