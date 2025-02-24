// backend/routes/adminRoutes.js
const express = require("express");
const adminRouter = express.Router();
const { loginAdmin, registerAdmin } = require("../controller/adminController");

adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);

module.exports = adminRouter;