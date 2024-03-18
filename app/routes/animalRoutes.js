const router = require("express").Router();
const {
  getAllAnimals,
  createAnimal,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
} = require("../controller/animalController");

router.get("/", getAllAnimals).post(createAnimal);

router
  .get("/:id", getAnimalById)
  .put("/:id", updateAnimal)
  .delete("/:id", deleteAnimal);

module.exports = router;
