const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// template
const UserSchema = new Schema()({
  username: String,
  password: String,
  email: String,
});
// turn into model
// first param is name
const User = mongoose.model("User", UserSchema);

modules.exports = User;
