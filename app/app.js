const express = require("express");
const morgan = require("morgan");
const app = express();
const routeHandler = require("./routes");

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("GET");
});
app.use("/api", routeHandler);
module.exports = app;
