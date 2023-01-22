import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useReducer } from "react";
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
  const router = useRouter();

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    if (!Cookies.get("token")) {
      return;
    }

    try {
      const { data } = await tesloApi.get("/user/validate-token");
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "LOGIN", payload: user });
    } catch (e: any) {
      Cookies.remove("token");
    }
  };

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

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("cart");
    Cookies.remove("shippingAddress");
    router.reload();
  };

  return (
    <AuthContext.Provider value={{ ...state, loginUser, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
