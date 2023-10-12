const express = require("express");
const {
  GetAllProducts,
  AddProducts,
  EditProducts,
  DeleteProducts
} = require("../controller/ProductsController");

const Route = express.Router();

Route.get("/", GetAllProducts);
Route.post("/insert", AddProducts);
Route.patch("/update/:id", EditProducts);
Route.delete("/delete/:id", DeleteProducts);

module.exports = Route;
