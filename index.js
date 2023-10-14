// Import required modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");

const ProductRoutes = require("./routes/ProductsRoutes");
const AuthRoute = require("./routes/AuthRoutes");
const LoginRoute = require("./routes/loginRoute");

// Initialize Express app
const app = express();

// Configure CORS options
const corsOption = {
  origin: "*",
  optionsSuccessStatus: 200
};

// Initialize modules with Express
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.set("view engine", "ejs");

// Configure MongoDB connection URL
const URL = process.env.MONGO_GLOBAL_URI || process.env.MONGO_LOCAL_URI;

// Connect to MongoDB server using Mongoose
mongoose
  .connect(URL)
  .then(() => {
    // Start server using Express
    app.use("/products", cors(corsOption), ProductRoutes);
    app.use("/auth/signin", cors(corsOption), AuthRoute);
    app.use("/auth/login", cors(corsOption), LoginRoute);
    app.listen(process.env.LOCAL_PORT ?? 3000, () => {
      console.log(`Listening to port ${process.env.LOCAL_PORT ?? 3000}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Error while connecting to MongoDB");
  });
