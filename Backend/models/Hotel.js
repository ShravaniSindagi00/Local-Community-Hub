const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  timings: { type: String, required: false }  // 👈 Now not required
});

module.exports = mongoose.model("Hotel", HotelSchema);
