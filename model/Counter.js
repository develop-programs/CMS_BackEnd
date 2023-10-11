const mongoose = require("mongoose");

const CounterSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  productSold: {
    type: Array,
  },
});

const CounterData = mongoose.model("Counter", CounterSchema);

module.exports(CounterData);
