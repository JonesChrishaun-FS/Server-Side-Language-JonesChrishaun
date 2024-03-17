const mongoose = require("mongoose");

const petsSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please add type of pet"],
    trim: true,
  },
  count: {
    type: Number,
    required: true,
    min: 50,
    max: 200,
  },
  supplies: {
    type: String,
    required: [true, "Please add description of reccommended supplies"],
    maxlength: [1000, "Decription cannot exceed more than 500 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description cannot exceed more than 500 characters"],
  },
});

module.exports = mongoose.model("pets", petsSchema);
