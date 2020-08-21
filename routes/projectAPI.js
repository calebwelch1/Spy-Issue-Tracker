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

module.exports = router;
// Project.find().then((projects) => res.json(items));
// model.find.then with each item return a response with the items json parsed

// use postman to test routes!
