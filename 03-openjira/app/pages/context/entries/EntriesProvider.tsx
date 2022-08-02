import React, { useReducer } from "react";
import entriesReducer from "./entriesReducer";
import EntriesContext from "./EntriesContext";
import { Entry } from "../../../interfaces/entry.interface";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "lorem ipsum 1",
      createdAT: Date.now(),
      status: "pending",
    },
    {
      _id: uuidv4(),
      description: "lorem ipsum 2",
      createdAT: Date.now(),
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      description: "lorem ipsum 3",
      createdAT: Date.now(),
      status: "finish",
    },
  ],
};

const EntriesProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(entriesReducer, initialState);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
