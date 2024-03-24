const aqp = require("api-query-params");
const Pets = require("../models/Pets");

const getAllPets = async (req, res) => {
  try {
    const { filter, skip, limit, sort, projection } = aqp(req.query);
    const pets = await Pets.find(filter)
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .select(projection);

    res.status(200).json({
      data: pets,
      success: true,
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
      pet,
      message: `${req.method} - Request made `,
    });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

module.exports = { getAllPets, createPet, getPetsById, updatePet, deletePet };
