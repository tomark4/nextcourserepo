import React, { useEffect, useReducer } from "react";
import entriesReducer from "./entriesReducer";
import EntriesContext from "./EntriesContext";
import { Entry } from "../../interfaces/entry.interface";
// import { v4 as uuidv4 } from "uuid";
import entriesApi from "../../apis/entriesApi";

export interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [],
};

const EntriesProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(entriesReducer, initialState);

  const refreshEntries = async () => {
    try {
      const { data } = await entriesApi.get<Entry[]>("/entries");
      dispatch({
        type: "[Entry] - GET DATA",
        payload: data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>("/entries", {
        description,
      });
      dispatch({ type: "[Entry] - AddEntry", payload: data });
    } catch (e) {
      console.error(e);
    }
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] - UpdateEntry", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
