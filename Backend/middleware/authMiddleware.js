const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, "secretKey");
    req.admin = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};