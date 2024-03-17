const getAllPets = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Request made`,
  });
};

const createPet = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Request made`,
  });
};

const getPetsById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    id,
    message: `${req.method} - Request made`,
  });
};

const updatePet = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    id,
    message: `${req.method} - Request made`,
  });
};

const deletePet = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    id,
    message: `${req.method} - Request made`,
  });
};

module.exports = { getAllPets, createPet, getPetsById, updatePet, deletePet };
