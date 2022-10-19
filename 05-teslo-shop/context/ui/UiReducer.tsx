import { UiState } from "./";

type UiActionType = { type: "UI_TOOGLE_MENU" };

export const uiReducer = (state: UiState, action: UiActionType) => {
  switch (action.type) {
    case "UI_TOOGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};
