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
    }
  | {
      type: "[CART] - CHANGE PRODUCT QTY";
      payload: ICartProduct;
    };

export const cartReducer = (state: CartState, action: CardActionType) => {
  switch (action.type) {
    case "[CART] - ADD PRODUCT ":
      return { ...state, cart: action.payload };

    case "[CART] - LOAD FROM COOKIES | STORAGE ":
      return { ...state, cart: action.payload };

    case "[CART] - CHANGE PRODUCT QTY":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product._id !== action.payload._id) return product;
          if (product.size !== action.payload.size) return product;

          return action.payload;
        }),
      };

    default:
      return state;
  }
};
