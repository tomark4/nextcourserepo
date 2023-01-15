import Cookies from "js-cookie";
import React, { useReducer } from "react";
import tesloApi from "../../api/teslo-api";
import { IUser } from "../../interfaces";
import { AuthContext, authReducer } from "./";

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await tesloApi.post("/user/login", { email, password });
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "LOGIN", payload: user });
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
