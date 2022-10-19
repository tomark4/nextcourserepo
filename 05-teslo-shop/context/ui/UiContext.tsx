import { createContext } from "react";

// interface context
interface ContextProps {
  isMenuOpen: boolean;
  toogleSideMenu: () => void;
}

export const UiContext = createContext({} as ContextProps);
