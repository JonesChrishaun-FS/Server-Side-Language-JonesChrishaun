const aqp = require("api-query-params");
const Animals = require("../models/Animals");
const Pets = require("../models/Pets");

const getAllAnimals = async (req, res) => {
  const { filter, skip, limit, sort, projection, population } = aqp(req.query);

  try {
    const animal = await Animals.find(filter)
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .select(projection)
      .populate(population);

    res.status(200).json({
      data: animal,
      success: true,
      message: `${req.method} - Request made`,
    });
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, error: error.message });
  }
};

const createAnimal = async (req, res) => {
  try {
    const { animal } = req.body;

    const user = await Pets.findById(animal.pet);
    animal.pet = user;

    const animalData = new Animals(animal);

    user.animal.push(animalData._id);

    const queries = [animalData.save(), user.save()];
    await Promise.all(queries);

    res.status(200).json({
      success: true,
      data: animalData,
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

const getAnimalById = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animals.findById(id);
    res.status(200).json({
      success: true,
      data: animal,
      message: `${req.method} - Request made`,
    });
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, error: error.message });
  }
};

const updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animals.findByIdAndUpdate(id, req.body, {
      $set: { new: true },
    });
    res.status(200).json({
      success: true,
      data: animal,
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

const deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animals.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: animal,
      message: `${req.method} - Request made `,
    });
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllAnimals,
  createAnimal,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
};
