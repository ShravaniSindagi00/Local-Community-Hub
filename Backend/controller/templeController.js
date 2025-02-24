// backend/controllers/templeController.js
const Temple = require("../models/Temple");

exports.getTemples = async (req, res) => {
  try {
    const temples = await Temple.find();
    res.json(temples);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getTempleById = async (req, res) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) return res.status(404).json({ message: "Temple not found" });
    res.json(temple);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createTemple = async (req, res) => {
  try {
    const newTemple = new Temple(req.body);
    await newTemple.save();
    res.status(201).json(newTemple);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateTemple = async (req, res) => {
  try {
    const updatedTemple = await Temple.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTemple);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteTemple = async (req, res) => {
  try {
    await Temple.findByIdAndDelete(req.params.id);
    res.json({ message: "Temple deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};