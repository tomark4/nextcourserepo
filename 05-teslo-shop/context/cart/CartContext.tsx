import { createContext } from "react";
import { ICartProduct } from "../../interfaces";

interface ContextProps {
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  impuesto: number;
  total: number;
  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  removeProduct: (product: ICartProduct) => void;
  isLoaded: boolean;
}

export const CartContext = createContext({} as ContextProps);
