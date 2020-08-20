const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const IssueSchema = new Schema({
  issue: { type: String, required: true },
  issueText: { type: String, required: true },
  issueImg: { type: String, required: false },
  priority: { type: String, required: true },
  solved: { type: Boolean, required: true, default: false },
  inProgress: { type: Boolean, default: false },
  issueCreated: { type: Date, default: Date.now },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
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
