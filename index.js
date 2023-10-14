// PRE Required files Imported
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ejs = require("ejs");
const ProductRoutes = require("./routes/ProductsRoutes");
const AuthRoute = require("./routes/AuthRoutes");
const cookieParser = require("cookie-parser")
// initializing express
const app = express();

// Option to Configure cors
const corsOption = {
  origin: "*",
  optionsSuccessStatus: 200
};

// Initializing modules with express
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser())
app.set("view engine", "ejs");

// Congiguring mongoDB from file .ev
const URL = process.env.MONGO_GLOBAL_URI || process.env.MONGO_LOCAL_URI;

// Connecting to mongoDB server
// Connect to MongoDB database using Mongoose
mongoose
  .connect(URL)
  .then(() => {
    // Start server using Express
    app.use("/products", cors(corsOption), ProductRoutes);
    app.use("/auth", cors(corsOption), AuthRoute);
    app.listen(process.env.LOCAL_PORT ?? 3000, () => {
      console.log(`Listening to port ${process.env.LOCAL_PORT ?? 3000}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Error while connecting to MongoDB");
  });
