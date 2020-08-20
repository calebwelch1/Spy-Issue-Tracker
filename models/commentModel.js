const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// template
const CommentSchema = new Schema({
  comment: String,
  commentCreated: { type: Date, default: Date.now },
});
// turn into model
// first param is name
const Comments = mongoose.model("Comment", CommentSchema);

module.exports = Comments;
