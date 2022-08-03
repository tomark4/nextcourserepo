import React, { useReducer } from "react";
import UiContext from "./UiContext";
import uiReducer from "./UiReducer";

export interface UiState {
  sideMenuOpen: boolean;
}

const initialState: UiState = {
  sideMenuOpen: false,
};

const UiProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSideBar = () => {
    dispatch({
      type: "UI_OPEN_SIDEBAR",
    });
  };

  const closeSideBar = () => {
    dispatch({
      type: "UI_CLOSE_SIDEBAR",
    });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        closeSideBar,
        openSideBar,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
