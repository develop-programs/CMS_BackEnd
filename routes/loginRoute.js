const express = require("express");
const jwt = require("jsonwebtoken");
const AuthData = require("../model/auth");

const Route = express.Router();

Route.get("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ msg: "Data not found" });
    }
    const token = jwt.sign(
      { Email: email, Password: password },
      process.env.JWT_SECRETE_KEY,
      {
        algorithm: HS512
      }
    );
    const response = await AuthData({ email });
    return res.status(200).json({ data: response, Key: token });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

module.exports = Route;
