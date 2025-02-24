// backend/models/Temple.js
const mongoose = require("mongoose");

const TempleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  history: { type: String, required: true },
  rituals: { type: [String], required: true },
  events: { type: [String], required: true },
  location: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Temple", TempleSchema);