const mongoose = require("mongoose");

const CounterSchema = new mongoose.Schema(
  {
    id: {
      type: String
    },
    name: {
      type: String
    },
    productSold: {
      id: String,
      name: String
    }
  },
  { timestamps: true }
);

const CounterData = mongoose.model("Counter", CounterSchema);

module.exports = CounterData;
