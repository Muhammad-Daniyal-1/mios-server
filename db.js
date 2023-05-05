const mongoose = require("mongoose");
const MongoURI = process.env.MONGO_URI;
mongoose.set("strictQuery", true);
ConnectToMongo = () => {
  mongoose.connect(MongoURI);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB");
  });
};

module.exports = ConnectToMongo;
