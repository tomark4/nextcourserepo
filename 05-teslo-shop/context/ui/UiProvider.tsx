import React, { useReducer } from "react";
import { UiContext, uiReducer } from "./";

// interface state
export interface UiState {
  isMenuOpen: boolean;
}

const initialState: UiState = {
  isMenuOpen: false,
};

const UiProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const toogleSideMenu = () => {
    dispatch({ type: "UI_TOOGLE_MENU" });
  };

  return (
    <UiContext.Provider value={{ ...state, toogleSideMenu }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
