require("dotenv").config();

const ConnectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
ConnectToMongo();

const app = express();
app.use(cookieParser("MIOS_FRONTEND_SECRET"));
// const port = 5000;
app.use(
  cors({
    origin: "https://mios-roan.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://mios-roan.vercel.app");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//Avaialble Routes
app.use("/api/auth", require("./routes/auth")),
  app.use("/api/product", require("./routes/products"));
app.use("/api/category", require("./routes/categories"));
app.use("/api/order", require("./routes/order"));
app.use("/api/shipping", require("./routes/shipping"));
app.use("/api/payment", require("./routes/payment"));
app.use("/api/profit", require("./routes/profit"));
app.use("/api/profitrecords", require("./routes/profitHistory"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/myshop", require("./routes/myshop"));
app.use(cors());
app.get("/");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, () => {
  console.log("Server is Started Suceessfully");
});
