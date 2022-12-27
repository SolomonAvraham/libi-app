const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  teamA: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team", require: true }],
  teamB: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team", require: true }],
  location: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team", require: true }],
  scoreTeamA: { type: Number, require: true },
  scoreTeamB: { type: Number, require: true },
  // date: { type: Date, require: true },
});

module.exports = mongoose.model("Game", gameSchema);
