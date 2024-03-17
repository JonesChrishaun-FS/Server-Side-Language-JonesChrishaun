const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  count: {
    type: Number,
    required: true,
    min: 50,
    max: 100,
  },
  price: {
    type: Number,
    get: (v) => (v / 100).toFixed(2),
    set: (v) => v * 100,
  },
  food: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description cannot exceed more than 500 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description cannot exceed more than 500 characters"],
  },

  toJSON: { getters: true },
});
