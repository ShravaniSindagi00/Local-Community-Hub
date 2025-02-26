const Hotel = require("../models/Hotel");

exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    console.error("❌ Error fetching hotels:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.json(hotel);
  } catch (error) {
    console.error("❌ Error fetching hotel by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createHotel = async (req, res) => {
  try {
    console.log("🔍 Request Body:", req.body);

    // Validate required fields
    const { name, location, rating, timings } = req.body;
    if (!name || !location || !rating || !timings) {
      return res.status(400).json({ message: "All fields (name, location, rating, timings) are required" });
    }

    // Create and save hotel
    const newHotel = new Hotel({ name, location, rating, timings });
    const savedHotel = await newHotel.save();

    console.log("✅ Hotel Created:", savedHotel);
    res.status(201).json(savedHotel);
  } catch (error) {
    console.error("❌ Error creating hotel:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.updateHotel = async (req, res) => {
  try {
    console.log("🔄 Updating Hotel ID:", req.params.id);
    console.log("📌 Update Data:", req.body);

    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    console.log("✅ Hotel Updated:", updatedHotel);
    res.json(updatedHotel);
  } catch (error) {
    console.error("❌ Error updating hotel:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    console.log("🗑️ Deleting Hotel ID:", req.params.id);

    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);

    if (!deletedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    console.log("✅ Hotel Deleted:", deletedHotel);
    res.json({ message: "Hotel deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting hotel:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
