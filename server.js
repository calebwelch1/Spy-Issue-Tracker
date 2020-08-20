// need connection to database
const mongoose = require("mongoose");
const User = require("./models/userModel");
//express
const express = require("express");
//require models
const db = require("./models");
//app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// /localhost/name of database...
const dbUrl =
  "mongodb+srv://caleb:caleb123@cluster0.kmyir.mongodb.net/<dbname>?retryWrites=true&w=majority";
// make actual connection
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// query
// empty find is a find all.
User.find({}).then((users) => console.log(users));
// example query for finding users with an age greater than 18
// User.find({ age: { $gte: 18 } }).then((users) => console.log(users));
// to find by user mongo id
// we can also use any functions we added to our model!
User.findById("5f3e8fd6503a0b0d602d566a").then((user) =>
  console.log(user.getFullName())
);

// how you crud with the model you made
User.create({
  // enter here the parameters set in the model
  username: "caleb",
  password: "caleb1",
  email: "caleb1@github.com",
})
  .then((user) => {
    // console logging our input
    console.log(user);
  })
  .catch((err) => {
    // logging if an error occurs
    console.err(err);
  });

//   if we run node server.js with mongod running on load this will create a new user with the data passed in above!

// to do this for input... we must make a generalized CRUD api and then link it with user input from the front end. Probably going to use
// ROUTERs
