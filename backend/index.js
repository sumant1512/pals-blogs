const express = require("express");
const connectToMongo = require("./db");

connectToMongo();
const app = express();
app.use(express.json());
const port = 3001;

app.use("/api/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log("Server Started at ", port);
});
