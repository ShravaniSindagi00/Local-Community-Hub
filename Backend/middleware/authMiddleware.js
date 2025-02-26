const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");

  console.log("Received Authorization Header:", authHeader); // Debugging

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
    console.log("Extracted Token:", token); // Debugging

    const verified = jwt.verify(token, "secretKey");
    console.log("Verified Token Payload:", verified); // Debugging

    req.admin = verified; // Attach decoded token to request
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(400).json({ message: "Invalid Token" });
  }
};
