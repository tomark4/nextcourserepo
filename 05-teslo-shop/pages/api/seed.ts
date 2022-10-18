import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";
import { Product } from "../../models";
import { initialData } from "../../database/products";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "no tiene acceso a este servicio" });
  }

  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(initialData.products);
  await db.disconnect();

  res.status(200).json({ message: "Proceso realizado correctamente" });
}
