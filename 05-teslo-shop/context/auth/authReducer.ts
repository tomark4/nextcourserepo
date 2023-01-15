import { IUser } from "../../interfaces";
import { AuthState } from "./";

type AuthActions = { type: "LOGIN"; payload: IUser } | { type: "LOGOUT" };

export const authReducer = (
  state: AuthState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true, user: action.payload };

    case "LOGOUT":
      return { ...state, isLoggedIn: false, user: undefined };

    default:
      return state;
  }
};
