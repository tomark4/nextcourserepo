import axios from "axios";
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

export interface PayloadRegister {
  name: string;
  email: string;
  password: string;
}

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
    } catch (e: any) {
      return false;
    }
  };

  const registerUser = async (
    payload: PayloadRegister
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await tesloApi.post("/user/register", payload);
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "LOGIN", payload: user });
      return { hasError: false };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        // axios error
        return { hasError: true, message: e.response?.data.message };
      }

      return { hasError: true, message: "Error: user not created" };
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, loginUser, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
