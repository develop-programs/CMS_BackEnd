const express = require("express");
const {
  GetAllProducts,
  AddProducts,
  EditProducts,
  DeleteProducts
} = require("../controller/ProductsController");
const CheckToken = require("../middleware/token");

const Route = express.Router();

Route.route("/")
  .get(CheckToken, GetAllProducts)
  .post(CheckToken, AddProducts);

Route.route("/update/:id")
  .patch(CheckToken, EditProducts);

Route.route("/delete/:id")
  .delete(CheckToken, DeleteProducts);

module.exports = Route;
