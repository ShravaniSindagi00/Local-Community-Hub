const Theater = require("../models/Theater");

exports.getTheaters = async (req, res) => {
  try {
    const theaters = await Theater.find();
    res.json(theaters);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getTheaterById = async (req, res) => {
  try {
    const theater = await Theater.findById(req.params.id);
    if (!theater) return res.status(404).json({ message: "Theater not found" });
    res.json(theater);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createTheater = async (req, res) => {
  try {
    const newTheater = new Theater(req.body);
    await newTheater.save();
    res.status(201).json(newTheater);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateTheater = async (req, res) => {
  try {
    const updatedTheater = await Theater.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTheater);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteTheater = async (req, res) => {
  try {
    await Theater.findByIdAndDelete(req.params.id);
    res.json({ message: "Theater deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};