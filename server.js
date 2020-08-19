// need connection to database
const mongoose = require("mongoose");
const User = require("./model/userModel");

// /localhost/name of database...
const dbUrl = "mongodb://localhost/practice";
// make actual connection
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});

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
