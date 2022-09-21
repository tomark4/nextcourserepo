import { isValidObjectId } from "mongoose";
import EntryModel, { IEntry } from "../models/Entry";
import db from "./db";

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) {
    return null;
  }

  await db.connect();

  const entry = await EntryModel.findById(id).lean();

  await db.disconnect();

  return entry;
};
