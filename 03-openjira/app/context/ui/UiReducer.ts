import { UiState } from "./UiProvider";

type uiActionType =
  | { type: "UI_OPEN_SIDEBAR" }
  | { type: "UI_CLOSE_SIDEBAR" }
  | { type: "UI_IS_ADDING_ENTRY"; payload: boolean }
  | { type: "UI_START_DRAGGING" }
  | { type: "UI_END_DRAGGING" };

export const uiReducer = (state: UiState, action: uiActionType): UiState => {
  switch (action.type) {
    case "UI_OPEN_SIDEBAR":
      return { ...state, sideMenuOpen: true };

    case "UI_CLOSE_SIDEBAR":
      return { ...state, sideMenuOpen: false };

    case "UI_IS_ADDING_ENTRY":
      return { ...state, isAdding: action.payload };

    case "UI_START_DRAGGING":
      return { ...state, isDragging: true };

    case "UI_END_DRAGGING":
      return { ...state, isDragging: false };

    default:
      return state;
  }
};

export default uiReducer;
