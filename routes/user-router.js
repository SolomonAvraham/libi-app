const router = require("express").Router();
const authToken = require("../middleware/verifyToken");

const { signup, login } = require("../controllers/user-ctr");


router.post("/signup", signup);
router.post("/login", login );

module.exports = router; 
