import mongoose from "mongoose";
import db from "../../../database/db";
import EntryModel, { IEntry } from "../../../models/Entry";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Id not valid " + id });
  }

  switch (req.method) {
    case "GET":
      return getEntryById(id, res);

    case "PUT":
      return updateEntry(id, req, res);

    default:
      return res.status(400).json({ message: "method doesn't exist' " });
  }
}

const getEntryById = async (id: any, res: NextApiResponse<Data>) => {
  await db.connect();
  try {
    const entry = await EntryModel.findById(id);

    if (!entry) {
      return res.status(400).json({ message: "Id not found" });
    }

    await db.disconnect();

    return res.status(200).json(entry);
  } catch (e) {
    await db.disconnect();
    return res.status(500).json({ message: "There was an error" });
  }
};

const updateEntry = async (
  id: any,
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect();

  const entryToUpdate = await EntryModel.findById(id);

  if (!entryToUpdate) {
    return res.status(400).json({ message: "Id not found" });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await EntryModel.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );

    await db.disconnect();

    return res.status(200).json(updatedEntry!);
  } catch (e: any) {
    await db.disconnect();
    console.error(e);
    return res.status(400).json({
      message: "There was an error: " + e.errors.status.message,
    });
  }
};
