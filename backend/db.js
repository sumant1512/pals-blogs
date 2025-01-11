const mongoose = require("mongoose");
const dburi = "mongodb://localhost:27017/";

const connectToMongo = async () => {
  await mongoose.connect(dburi);
};

module.exports = connectToMongo;
