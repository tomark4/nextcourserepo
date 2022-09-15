import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../database/db";
import EntryModel, { IEntry } from "../../../models/Entry";

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEntries(res);

    case "POST":
      return storeEntry(req, res);

    default:
      return res.status(400).json({ message: "endpoint no existe" });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();

  const entries = await EntryModel.find().sort({ createdAt: "ascending" });

  await db.disconnect();
  res.status(200).json(entries);
};

const storeEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description = "" } = req.body;

  const newEntry = new EntryModel({
    description,
    createdAt: Date.now(),
  });

  try {
    await db.connect();
    await db.disconnect();
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (e) {
    await db.disconnect();
    console.error(e);
    res.status(500).json({ message: "Error on create new entry" });
  }
};
