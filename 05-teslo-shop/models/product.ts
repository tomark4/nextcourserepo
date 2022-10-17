import mongoose, { Schema, model, Model } from "mongoose";
import { Product } from "../interfaces";

export const productSchema = new Schema(
  {
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: { values: ["XS", "S", "M", "L", "XL", "XXL"] },
        message: "{VALUE} no es un tamaño permitido",
      },
    ],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
      type: String,
      enum: { values: ["shirts", "pants", "hoodies", "hats"] },
      message: "{VALUE} no es un tipo permitido",
    },
    gender: {
      type: String,
      enum: { values: ["men", "women", "kids", "unisex"] },
      message: "{VALUE} no es un género permitido",
    },
  },
  { timestamps: true }
);

// TODO: crear indice

const Product: Model<Product> =
  mongoose.models.Product || model("Product", productSchema);

export default Product;
