import { UiState } from "./UiProvider";

type uiActionType = { type: "UI_OPEN_SIDEBAR" } | { type: "UI_CLOSE_SIDEBAR" };

export const uiReducer = (state: UiState, action: uiActionType): UiState => {
  switch (action.type) {
    case "UI_OPEN_SIDEBAR":
      return { ...state, sideMenuOpen: true };

    case "UI_CLOSE_SIDEBAR":
      return { ...state, sideMenuOpen: false };

    default:
      return state;
  }
};

export default uiReducer;
