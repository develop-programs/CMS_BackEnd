const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ""
    },
    gender: {
      type: String
    }
  },
  { timestamps: true }
);

const AuthData = mongoose.model("Auth", AuthSchema);

module.exports = AuthData;
