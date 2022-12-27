const gamesModel = require("../models/games-model");
const teamModel = require("../models/teams-model");

const getGame = async (req, res) => {
  await gamesModel
    .find({})
    .populate("teamA","name city")
    .populate("teamB", "name")
    .then((data, error) => {
      if (error) {
        return res.status(400).json({ success: false, error });
      }
      if (data.length == 0) {
        return res.json({ success: false, message: "no data" });
      }

      res.status(200).json({ success: true, team: data });
    });
};

const getGameById = async (req, res) => {
  await gamesModel
    .findById(req.params.id)
    .then((team) => {
      if (!team) {
        return res.json({ success: false, message: "Game not found" });
      }
      return res.status(200).json({ success: true, team });
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

const addGame = async (req, res) => {
  const { teamA, teamB } = req.body.game;

  const isTeamExists = await teamModel.exists({ name: teamA && teamB }).exec();
  if (!isTeamExists) return res.status(404).json("team doesn't exists");

  await gamesModel
    .insertMany(req.body.game)
    .then(() =>
      res
        .status(300)
        .json({ success: true, massage: "Game added successfully" })
    )
    .catch((error) =>
      res.status(400).json({
        success: false,
        message: error.errors,
      })
    );
};

const updateGame = async (req, res) => {
  await gamesModel
    .findByIdAndUpdate(req.params.id, req.body.Game)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const deleteGame = async (req, res) => {
  await gamesModel
    .findByIdAndDelete(req.params.id, req.body.Game)
    .then(() =>
      res
        .status(300)
        .json({ message: true, message: "Game deleted successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

module.exports = {
  getGame,
  getGameById,
  addGame,
  updateGame,
  deleteGame,
};
