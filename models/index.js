// Exporting an object containing all of our models

module.exports = {
  User: require("./userModel.js"),
  Project: require("./projectModel.js"),
  Issue: require("./issueModel.js"),
  Comment: require("./commentModel.js"),
};
