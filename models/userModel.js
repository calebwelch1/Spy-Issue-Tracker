const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// template
const UserSchema = new Schema({
  firstname: String,
  lasename: String,
  username: String,
  password: String,
  email: String,
});
// turn into model
// first param is name
const User = mongoose.model("User", UserSchema);

module.exports = User;
