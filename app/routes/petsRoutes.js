const router = require("express").Router();
const {
  getAllPets,
  createPet,
  getPetsById,
  updatePet,
  deletePet,
} = require("../controller/petsController");

router.get("/", getAllPets);

router.post("/", createPet);

router.get("/:id", getPetsById);

router.put("/:id", updatePet);

router.delete("/:id", deletePet);

module.exports = router;
