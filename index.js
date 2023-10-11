// PRE Required files Imported
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ejs = require("ejs");
// initializing express
const app = express();

// Option to Configure cors
const corsOption = {
  origin: "*",
  optionsSuccessStatus: 200,
};

// Initializing modules with express
app.use(express.json());
app.use(cors(corsOption));
app.set("view engine", "ejs");

// Configuring views with express
app.get("/", (req, res) => {
  res.render("home/index");
});

// Congiguring mongoDB from file .ev
const URL = process.env.MONGO_LOCAL_URI ?? process.env.MONGO_GLOBAL_URI;

// Connecting to mongoDB server
mongoose
  .connect(URL)
  .then(() => {
    app.listen(process.env.LOCAL_PORT ?? 3000, () => {
      console.log(`Listing to port ${process.env.LOCAL_PORT ?? 3000}`);
    });
  })
  .catch(() => {
    console.log("Error while Connecting Mongoose");
  });
