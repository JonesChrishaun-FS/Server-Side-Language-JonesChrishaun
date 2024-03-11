const express = require("express");
const router = express.Router();
const pets = [];
let count = 1;

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pet = pets.find((pet) => pet.id === id);
  res.status(200).json({
    message: "Service is up",
    id: pet,
  });
});
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pet = pets.find((pet) => pet.id === id);
  const updatePet = pets.forEach((e, id) => {
    if (e.id === pet.id) {
      pets[id] = pet;
    }
    console.log(updatePet);
  });
  res.status(200).json({
    message: "Service is up",
    id: updatePet,
  });
});
router.post("/", (req, res) => {
  const id = count++;
  const newPet = { id: id, ...req.body };
  pets.push(newPet);
  res.status(200).json({
    message: "Service is up",
    data: pets,
  });
});
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Service is up",
    data: pets,
  });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: "Service is up",
    id: req.params.id,
  });
});

module.exports = router;
