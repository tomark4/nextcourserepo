import { createContext } from "react";
import { Entry } from "../../interfaces/entry.interface";

interface EntriesContextProps {
  entries: Entry[];
  addNewEntry: (value: string) => void;
  updateEntry: (entry: Entry) => void;
}

const EntriesContext = createContext({} as EntriesContextProps);

export default EntriesContext;
