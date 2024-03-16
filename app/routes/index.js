const express = require("express");
const router = express.Router();
const petRoutes = require("./petsRoutes");

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
  });
});

router.use("/pets", petRoutes);

module.exports = router;
