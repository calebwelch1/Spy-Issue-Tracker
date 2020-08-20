const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// template
const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, minLength: 5, unique: true },
  password: { type: String, required: true, minLength: 5 },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Email is invalid"],
    unique: true,
  },
  userCreated: { type: Date, default: Date.now },
});

UserSchema.methods.getFullName = function () {
  return `${this.firstname} ${this.lastname}`;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
