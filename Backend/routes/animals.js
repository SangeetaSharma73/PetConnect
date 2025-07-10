const express = require("express");
const router = express.Router();
const Animal = require("../models/Animal");

// Get all animals (optional filter by species)
router.get("/", async (req, res) => {
  try {
    const filter = {};
    if (req.query.species) {
      filter.species = req.query.species;
    }
    const animals = await Animal.find(filter);
    res.json(animals);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
