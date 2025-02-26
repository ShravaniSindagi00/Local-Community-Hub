// backend/controllers/adminController.js
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: admin._id }, "secretKey", { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAdminProfile = async (req, res) => {
  try {
    console.log("Admin ID from token:", req.admin?.id);  // Debugging
    const admin = await Admin.findById(req.admin.id).select("-password");
    
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    
    res.json(admin);
  } catch (error) {
    console.error("Error in getAdminProfile:", error);  // Debugging
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


