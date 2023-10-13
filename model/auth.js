const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    password: {
      type: Number
    },
    email: {
      type: String
    },
    gender: {
      type: String
    }
  },
  { timestamps: true }
);

const AuthData = mongoose.model("Auth", AuthSchema);

module.exports = AuthData;
