import { Product as IProduct } from "../interfaces";
import { Product } from "../models";
import { db } from "./";

export const getProductBySlug = async (
  slug: string
): Promise<IProduct | null> => {
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  if (!product) {
    return null;
  }

  return JSON.parse(JSON.stringify(product));
};

interface ProductSlug {
  slug: string;
}

export const getAllProductsSlugs = async (): Promise<ProductSlug[]> => {
  await db.connect();
  const slugs = await Product.find({}, { slug: 1, _id: 0 }).lean();
  await db.disconnect();

  return slugs;
};
