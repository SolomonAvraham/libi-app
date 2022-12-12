const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
  })
  .then(() => {
    console.log("connected successfully to DB");
  })
  .catch((error) => {
    console.error(error.message, "DB connection failed");
  });

const db = mongoose.connection;

module.exports = db;
