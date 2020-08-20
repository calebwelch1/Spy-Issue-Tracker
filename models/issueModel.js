const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const IssueSchema = new Schema({
  issue: { type: String, required: true },
  issueImg: { type: String, required: true },
  priority: { type: String, required: true },
  solved: { type: Boolean, required: true, default: false },
  issueCreated: { type: Date, default: Date.now },
});
// write method to update solved to true
IssueSchema.methods.setSolved = function () {
  this.solved = true;
};
IssueSchema.methods.setUnsolved = function () {
  this.solved = false;
};
const Issue = mongoose.model("Issue", IssueSchema);

module.exports = Issue;
