// backend/routes/adminRoutes.js
const express = require("express");
const adminRouter = express.Router();
const {loginAdmin, registerAdmin , getAdminProfile}= require("../controller/adminController");
const { verifyToken } = require("../middleware/authMiddleware");

adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/profile",verifyToken, getAdminProfile)

module.exports = adminRouter;