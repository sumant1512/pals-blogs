const mongoose = require("mongoose");
const dburi = "mongodb://localhost:27017/palsblogs";

const connectToMongo = async () => {
  await mongoose.connect(dburi);
  console.log("connected db");
};

module.exports = connectToMongo;
