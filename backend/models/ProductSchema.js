//blueprint of original collection is models
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
{
  product_id: {
    type: Number,
    unique: true,
    required: [true, "product id is required"],
  },
  name: {
    type: String,
    required: [true, "product name is required"],
  },
  productImg: {
    type: String,
    required: [true, "productImg is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  product_qty: {
    type: Number,
    required: [true, "product_qty is required"],
  },
  new_price: {
    type: Number,
    required: [true, "new_price is required"],
  },
  old_price: {
    type: Number,
    required: [true, "old price is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  sub_category: {
    type: String,
    required: [true, "sub_category is required"],
  },
  rating: {
    type: Number,
    required: [true, "rating is required"],
  },
  colors: {
    type: [String],
    required: [true, "colors is required"],
  },
}
);

const ProductCollection = mongoose.model("products", ProductSchema); //to change schema to collection
module.exports = ProductCollection;
