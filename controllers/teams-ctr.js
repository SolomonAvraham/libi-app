const teamModel = require("../models/teams-model");

const getTeam = async (req, res) => {
  await teamModel.find({}).then((data, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (data.length == 0) {
      return res.json({ success: false, message: "no data" });
    }

    res.status(200).json({ success: true, team: data });
  });
};

const getTeamById = async (req, res) => {
  await teamModel
    .findById(req.params.id)
    .then((team) => {
      if (!team) {
        return res.json({ success: false, message: "team not found" });
      }
      return res.status(200).json({ success: true, team });
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

const addTeam = async (req, res) => {
  await teamModel
    .insertMany(req.body.team)
    .then(() =>
      res
        .status(300)
        .json({ success: true, massage: "team added successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const updateTeam = async (req, res) => {
  await teamModel
    .findByIdAndUpdate(req.params.id, req.body.team)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const deleteTeam = async (req, res) => {
  await teamModel
    .findByIdAndDelete(req.params.id, req.body.team)
    .then(() =>
      res
        .status(300)
        .json({ message: true, message: "team deleted successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

module.exports = {
  getTeam,
  getTeamById,
  addTeam,
  updateTeam,
  deleteTeam,
};
