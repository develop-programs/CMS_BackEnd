const express = require("express");

const Routes = express.Router();

Routes.get("/");
Routes.post("/register");
Routes.patch("/update");
Routes.delete("/remove");

module.exports = Routes;
