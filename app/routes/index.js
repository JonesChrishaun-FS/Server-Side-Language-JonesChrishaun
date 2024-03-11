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
  res.status(200).json({
    message: "Service is up",
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
  const id = parseInt(req.params.id);
  pets.splice(pets.findIndex((pet) => pet.id === id));
  res.status(200).json({
    message: "Service is up",
    delete: true,
  });
});
module.exports = router;
