import { createContext } from "react";
import { Entry } from "../../interfaces/entry.interface";

interface EntriesContextProps {
  entries: Entry[];
  addNewEntry: (value: string) => void;
}

const EntriesContext = createContext({} as EntriesContextProps);

export default EntriesContext;
