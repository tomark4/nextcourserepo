import { createContext } from "react";
import { IUser } from "../../interfaces";
import { PayloadRegister } from "./AuthProvider";

interface ContextProps {
  isLoggedIn: boolean;
  user?: IUser;
  loginUser: (email: string, password: string) => Promise<boolean>;
  registerUser: (
    payload: PayloadRegister
  ) => Promise<{ hasError: boolean; message?: string }>;
  logout: () => void;
}

export const AuthContext = createContext({} as ContextProps);
