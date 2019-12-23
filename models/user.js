const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;