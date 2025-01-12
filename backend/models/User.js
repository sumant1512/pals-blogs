const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);
User.createIndexes();
module.exports = User;
