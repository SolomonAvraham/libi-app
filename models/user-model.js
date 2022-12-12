const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, require: true, min: 6, max: 255 },
  email: { type: String, require: true, min: 6, max: 255, unique: true },
  password: { type: String, require: true, min: 6, max: 1024 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
