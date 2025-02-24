// backend/models/Theater.js
const TheaterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    events: { type: [String], required: true },
  }, { timestamps: true });
  
  module.exports = mongoose.model("Theater", TheaterSchema);
  