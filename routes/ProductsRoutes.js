const express = require("express");
const {
  GetAllProducts,
  AddProducts,
  EditProducts,
  DeleteProducts
} = require("../controller/ProductsController");
const CheckToken = require("../middleware/token");

const Route = express.Router();

Route.get("/", CheckToken, GetAllProducts);
Route.post("/insert", AddProducts);
Route.patch("/update/:id", EditProducts);
Route.delete("/delete/:id", DeleteProducts);

module.exports = Route;
