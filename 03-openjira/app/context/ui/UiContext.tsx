import { createContext } from "react";

interface UiContextProps {
  sideMenuOpen: boolean;
  isAdding: boolean;
  isDragging: boolean;
  closeSideBar: () => void;
  openSideBar: () => void;
  setIsAddingEntry: (value: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

const UiContext = createContext({} as UiContextProps);

export default UiContext;
