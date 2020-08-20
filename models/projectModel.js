const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// template
const ProjectSchema = new Schema({
  projectName: { type: String, required: true },
  projectType: { type: String, required: true },
  projectCreated: { type: Date, default: Date.now },
  issues: [
    {
      type: Schema.Types.ObjectId,
      ref: "Issue",
    },
  ],
});
// add a method to calculate size based on how many times project has been accessed.
const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;

// going to have to add mongoose associations to my models too
// belongs to models.User foreign key _id
