// backend/models/Event.js
const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
  }, { timestamps: true });
  
  module.exports = mongoose.model("Event", EventSchema);