const Pets = require("../models/Pets");

const getAllPets = async (req, res) => {
  try {
    const pets = await Pets.find({});
    res.status(200).json({
      data: pets,
      success: true,
      message: `${req.method} - Request made`,
    });
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, error: error.message });
  }
};

const createPet = async (req, res) => {
  try {
    const { pet } = req.body;
    const newPet = await Pets.create(pet);
    res.status(200).json({
      success: true,
      data: newPet,
      message: `${req.method} - Request made`,
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      res.status(404).json({ error });
    } else {
      res.status(500).json(error.message);
    }
  }
};

const getPetsById = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pets.findById(id);
    res.status(200).json({
      success: true,
      data: pet,
      message: `${req.method} - Request made`,
    });
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, error: error.message });
  }
};

const updatePet = async (req, res) => {
  try {
    const { id } = req.params;
    const newPets = await Pets.findByIdAndUpdate(id, req.body, {
      $set: { new: true },
    });
    console.log(newPets);
    console.log(id);
    res.status(200).json({
      success: true,
      data: newPets,
      message: `${req.method} - Request made`,
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      res.status(404).json({ error });
    } else {
      res.status(500).json(error.message);
    }
  }
};

const deletePet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pets.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: `${req.method} - Request made `,
    });
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, error: error.message });
  }
};

module.exports = { getAllPets, createPet, getPetsById, updatePet, deletePet };
