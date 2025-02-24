const express = require("express");
const router = express.Router();
const templeRoutes = require("./templeRoutes");
const hotelRoutes = require("./hotelRoutes");
const eventRoutes = require("./eventRoutes");
const adminRoutes = require("./adminRoutes");
const theaterRoutes = require("./theaterRoutes");

router.use("/temples", templeRoutes);
router.use("/hotels", hotelRoutes);
router.use("/events", eventRoutes);
router.use("/admin", adminRoutes);
router.use("/theaters", theaterRoutes);

module.exports = router;