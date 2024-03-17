const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      unique: [true, "You can have only 1 type of animal"],
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", petSchema);
