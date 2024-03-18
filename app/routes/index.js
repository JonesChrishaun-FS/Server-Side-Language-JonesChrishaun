const express = require("express");
const router = express.Router();
const petRoutes = require("./petsRoutes");
const animalRoutes = require("./animalRoutes");

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
  });
});

router.use("/pets", petRoutes);
router.use("/animals", animalRoutes);

module.exports = router;
