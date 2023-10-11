const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductData = mongoose.model("Products", ProductSchema);

module.exports(ProductData);
