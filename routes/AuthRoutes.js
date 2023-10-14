const express = require("express");
const {
  GetAllAuth,
  RegisterUser,
  UpdateUser,
  DeleteUser
} = require("../controller/AuthController");

const Routes = express.Router();

Routes.get("/", GetAllAuth);
Routes.post("/register", RegisterUser);
Routes.patch("/update", UpdateUser);
Routes.delete("/remove", DeleteUser);

module.exports = Routes;
