const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Request made`,
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Request made`,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    id,
    message: `${req.method} - Request made`,
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    id,
    message: `${req.method} - Request made`,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    id,
    message: `${req.method} - Request made`,
  });
});

module.exports = router;
