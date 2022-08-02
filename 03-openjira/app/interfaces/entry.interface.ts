export interface Entry {
  _id: string;
  description: string;
  createdAT: number;
  status: EntryStatus;
}

export type EntryStatus = "pending" | "in-progress" | "finish";
