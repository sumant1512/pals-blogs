const express = require("express");
const connectToMongo = require("./db");

connectToMongo();
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Healthcheck passed");
});

app.listen(port, () => {
  console.log("Server Started at ", port);
});
