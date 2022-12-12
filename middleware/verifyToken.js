const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).json({ massage: "Access denied" });
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ massage: "Invalid token" });
  }
};

module.exports = {
  authToken,
};
