const mongoose = require("mongoose");

const ReturnSchema = new mongoose.Schema({
  productId: {
    type: String,
  },
  purchedAt: {
    type: Date,
  },
  Reason: {
    type: String,
  },
  Response: {
    type: String,
  },
});

const ReturnData = mongoose.model("Return", ReturnSchema);

module.exports(ReturnData);
