const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    desc: {
      type: String
    },
    gst: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const ProductData = mongoose.model("Products", ProductSchema);

module.exports = ProductData;
