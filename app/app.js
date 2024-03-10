const express = require("express");
const app = express();

app.gnpm et("/", (req, res) => {
  console.log("GET");
});

module.exports = app;
