// backend/models/Hotel.js
const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialtyDishes: { type: [String], required: true },
    timings: { type: String, required: true },
    location: { type: String, required: true },
  }, { timestamps: true });
  
  module.exports = mongoose.model("Hotel", HotelSchema);