const router = require("express").Router();
const {
  getTeam,
  getTeamById,
  addTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/teams-ctr");

router.get("/", getTeam);
router.get("/getById/:id", getTeamById);
router.post("/addTeam", addTeam);
router.put("/updateTeam", updateTeam);
router.delete("/deleteTeam/:id", deleteTeam);

module.exports = router;
