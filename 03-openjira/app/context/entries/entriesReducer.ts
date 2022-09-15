import { Entry } from "../../interfaces/entry.interface";
import { EntriesState } from "./EntriesProvider";

type EntriesActionType =
  | { type: "[Entry] - AddEntry"; payload: Entry }
  | { type: "[Entry] - UpdateEntry"; payload: Entry }
  | { type: "[Entry] - GET DATA"; payload: Entry[] };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "[Entry] - AddEntry":
      return { ...state, entries: [...state.entries, action.payload] };

    case "[Entry] - UpdateEntry":
      return {
        ...state,
        entries: state.entries.map((item) =>
          item._id === action.payload._id
            ? { ...item, status: action.payload.status }
            : item
        ),
      };

    case "[Entry] - GET DATA":
      return { ...state, entries: [...action.payload] };

    default:
      return state;
  }
};

export default entriesReducer;
