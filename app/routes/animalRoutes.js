const router = require("express").Router();
const {
  getAllAnimals,
  createAnimal,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
} = require("../controller/animalController");

router.get("/", getAllAnimals);

router.post("/", createAnimal);

router.get("/:id", getAnimalById);

router.put("/:id", updateAnimal);

router.delete("/:id", deleteAnimal);

module.exports = router;
