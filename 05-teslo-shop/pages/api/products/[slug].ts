import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Product as ProductI } from "../../../interfaces";
import { Product as ProductModel } from "../../../models";

type Data =
  | {
      message: string;
    }
  | ProductI;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProductBySlug(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

async function getProductBySlug(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;

  await db.connect();

  try {
    const product = await ProductModel.findOne({ slug }).lean();

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await db.disconnect();

    return res.json(product);
  } catch (e) {
    return res.status(500).json({ message: "error" });
  }
}
