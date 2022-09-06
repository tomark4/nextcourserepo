import React, { useReducer } from "react";
import UiContext from "./UiContext";
import uiReducer from "./UiReducer";

export interface UiState {
  sideMenuOpen: boolean;
  isAdding: boolean;
  isDragging: boolean;
}

const initialState: UiState = {
  sideMenuOpen: false,
  isAdding: false,
  isDragging: false,
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

  const setIsAddingEntry = (value: boolean) => {
    dispatch({
      type: "UI_IS_ADDING_ENTRY",
      payload: value,
    });
  };

  const startDragging = () => {
    dispatch({ type: "UI_START_DRAGGING" });
  };

  const endDragging = () => {
    dispatch({ type: "UI_END_DRAGGING" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        closeSideBar,
        openSideBar,
        setIsAddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
