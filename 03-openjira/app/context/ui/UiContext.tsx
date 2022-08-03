import { createContext } from "react";

interface UiContextProps {
  sideMenuOpen: boolean;
  closeSideBar: () => void;
  openSideBar: () => void;
}

const UiContext = createContext({} as UiContextProps);

export default UiContext;
