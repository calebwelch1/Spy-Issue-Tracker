const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const IssueSchema = new Schema({
  issue: String,
  issueImg: String,
  priority: String,
  solved: Boolean,
});

const Issue = mongoose.model("Issue", IssueSchema);

module.exports = Issue;
