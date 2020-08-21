// need connection to database
const mongoose = require("mongoose");
const User = require("./models/userModel");
const bodyParser = require("body-parser");
//express
const express = require("express");
//PORT
//require models
// Access thru db. MODEL
const db = require("./models");
const PORT = process.env.PORT || 8080;
// passwords/ dburl
const mongoURI = require("./config/keys").mongoURI;

// require our api routes
const projectAPI = require("./routes/projectAPI");

//app
const app = express();
app.use(bodyParser.json());
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// /localhost/name of database...
dbUrl = mongoURI;
// make actual connection
mongoose
  .connect(process.env.MONGODB_URI || dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//
// use routes
// using project routes as an example!
// if you go to this url, use this api route
app.use("/api/projects", projectAPI);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
// query
// empty find is a find all.
// User.find({}).then((users) => console.log(users));
// example query for finding users with an age greater than 18
// User.find({ age: { $gte: 18 } }).then((users) => console.log(users));
// to find by user mongo id
// we can also use any functions we added to our model!
// User.findById("5f3e8fd6503a0b0d602d566a").then((user) =>
//   console.log(user.getFullName())
// );

//
// -----------------------------------------------------------------------------------------------------------------------
//
// how you crud with the model you made
db.Project.create({
  // enter here the parameters set in the model
  projectName: "Write Routes",
  projectType: "Javascript, Express, Router",
})
  .then((project) => {
    // console logging our input
    console.log(project);
  })
  .catch((err) => {
    // logging if an error occurs
    console.err(err);
  });
// watch traversy mern to proceed. success connecting to database, need to write api routes but not sure if to use express or react router?
//   if we run node server.js with mongod running on load this will create a new user with the data passed in above!

// to do this for input... we must make a generalized CRUD api and then link it with user input from the front end. Probably going to use
// ROUTERs
