const mongoose = require("mongoose");

const petsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add type of pet"],
  },
  count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description cannot exceed more than 500 characters"],
  },
});

module.exports = mongoose.model("Pets", petsSchema);
