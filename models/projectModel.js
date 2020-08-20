const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// template
const ProjectSchema = new Schema({
  projectName: String,
  projectType: String,
  preferences: String,
});
// turn into model
// first param is name
const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;

// going to have to add mongoose associations to my models too
// belongs to models.User foreign key _id
