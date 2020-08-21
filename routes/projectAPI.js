const express = require("express");
const router = express.Router();

//project model
const Project = require("../models/projectModel");

// @ route GET api/projects
//@desc Get all projects
//@access Public - may want to add authorization in the future
// REMEMBER we told the server.js we want to associate anything at '/api/projects'
// with this file, so when we use router, we just put / !
router.get("/", (req, res) => {
  Project.find()
    .sort({ date: -1 })
    .then((projects) => res.json(projects));
});
// @ route POST api/projects
//@desc post a project
//@access Public
// check post routes by using postman
// add Content-Type then value of application/json
// then in the body make a dummy project in json, tag it as json
// and send the post! working 8/21/2020 6:20pm
router.post("/", (req, res) => {
  const newProject = new Project({
    projectName: req.body.projectName,
    projectType: req.body.projectType,
  });
  // save new project to database
  newProject.save().then((project) => res.json(project));
});

module.exports = router;
// Project.find().then((projects) => res.json(items));
// model.find.then with each item return a response with the items json parsed

// use postman to test routes!
