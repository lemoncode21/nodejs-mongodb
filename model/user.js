const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
