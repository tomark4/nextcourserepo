import { ICartProduct } from "../../interfaces";
import { CartState } from "./CartProvider";

type CardActionType =
  | {
      type: "[CART] - LOAD FROM COOKIES | STORAGE ";
      payload: ICartProduct[];
    }
  | {
      type: "[CART] - ADD PRODUCT ";
      payload: ICartProduct[];
    };

export const cartReducer = (state: CartState, action: CardActionType) => {
  switch (action.type) {
    case "[CART] - ADD PRODUCT ":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
