const mongoose = require("mongoose");
const MongoURI = process.env.MONGO_URI

ConnectToMongo = () => {
  mongoose.connect("mongodb+srv://apexspacenet:9LM04YryKdJCHzmZ@cluster0.aiyg5sc.mongodb.net/mios");
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB");
  });
};

module.exports = ConnectToMongo;
