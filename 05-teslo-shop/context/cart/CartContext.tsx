import { createContext } from "react";
import { ICartProduct } from "../../interfaces";

// interface context
interface ContextProps {
  cart: ICartProduct[];
  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  removeProduct: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as ContextProps);
