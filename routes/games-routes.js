const router = require("express").Router();
const {
  getGame,
  getGameById,
  addGame,
  updateGame,
  deleteGame,
} = require("../controllers/games-ctr");

router.get("/", getGame);
router.get("/getById/:id", getGameById);
router.post("/addGame", addGame);
router.put("/updateGame", updateGame);
router.delete("/deleteGame/:id", deleteGame);

module.exports = router;
