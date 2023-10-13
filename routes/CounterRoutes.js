const express = require("express");

const Routes = express.Router();

Routes.get("/");
Routes.post("/");
Routes.patch("/");
Routes.delete("/");

module.exports = Routes;
