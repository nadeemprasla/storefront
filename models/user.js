const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  item: [{
      type: Schema.Types.ObjectId,
      ref: "Item"
  }]
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
