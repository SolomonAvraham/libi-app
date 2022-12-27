const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, require: true },
  division: { type: String, require: true },
  win: { type: Number, require: true },
  lost: { type: Number, require: true },
  season: { type: Number, require: true },
  city: { type: String, require: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Team", teamSchema);
