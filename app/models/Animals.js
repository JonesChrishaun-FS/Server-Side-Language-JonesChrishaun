const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: [true, "You can have only 1 animal name"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    count: {
      type: Number,
      required: true,
      min: [5, "Must be at least 5"],
      max: [50, "Cannot be more than 50"],
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
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
    },
  },
  { timestamps: true },
  { toJSON: { getters: true } }.price
);

module.exports = mongoose.model("Animals", animalSchema);
