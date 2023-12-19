const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    price:Number,
    sale:Number
  },
  { collection: "product", timestamps: true }
);

const product = mongoose.model("product", productSchema);

module.exports = product;