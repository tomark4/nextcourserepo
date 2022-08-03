import { EntriesState } from "./EntriesProvider";

type EntriesActionType = { type: "[Entries] - Action name" };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default entriesReducer;
