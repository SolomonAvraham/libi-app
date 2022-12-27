require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectionDB = require("./DB/index");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user-router");
const teamRouter = require("./routes/teams-routes");
const gamesRouter = require("./routes/games-routes");

const port = 8000;

app.use(cookieParser());
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/api/teams/", teamRouter);
app.use("/api/games/", gamesRouter);

connectionDB.on("error", (error) => {
  console.error(error);
});

app.get("/", (req, res) => {
  res.send({ message: "success" });
});

app.listen(port, () => {
  console.log(`Welcome to my service, you on port : ${port}`);
});
