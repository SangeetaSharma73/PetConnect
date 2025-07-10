const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: String,
  species: String,
  breed: String,
  age: Number,
  price:Number,
  gender: String,
  description: String,
  photo: String,
  isAvailableForAdoption: Boolean,
});

module.exports = mongoose.model("Animal", animalSchema);
