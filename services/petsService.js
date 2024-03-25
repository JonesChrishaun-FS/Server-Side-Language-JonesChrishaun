const axios = require("axios");
require("dotenv").config();

const petsService = async () => {
  console.log("Real Pets");
  return await axios.get(`${process.env.PORT}`);
};

const petsServiceById = async (id) => {
  return await axios.get(`${process.env.petsURL}${id}`);
};

module.exports = { petsService, petsServiceById };
