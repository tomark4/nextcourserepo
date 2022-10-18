import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Product as ProductI } from "../../../interfaces";
import { Product as ProductModel } from "../../../models";

type Data =
  | {
      message: string;
    }
  | ProductI[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return searchProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

async function searchProduct(req: NextApiRequest, res: NextApiResponse<Data>) {
  let { q = "" } = req.query;

  if (q.length === 0) {
    return res.status(400).json({ message: "Enter your search params" });
  }

  q = String(q).toLowerCase();

  await db.connect();
  try {
    const products = await ProductModel.find({
      $text: { $search: q },
    })
      .select("title images price inStock slug -_id")
      .lean();
    await db.disconnect();
    return res.json(products);
  } catch (e) {
    return res.status(500).json({ message: "There was an error" });
  }
}
