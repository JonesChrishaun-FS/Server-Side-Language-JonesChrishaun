const express = require("express");
const morgan = require("morgan");
const app = express();
const connectDB = require("./db/config");
const routeHandler = require("./routes");

connectDB();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

app.use("/api", routeHandler);
module.exports = app;
