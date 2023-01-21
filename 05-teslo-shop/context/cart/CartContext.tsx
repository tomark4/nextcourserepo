import { createContext } from "react";
import { ICartProduct } from "../../interfaces";
import { ShippingAddress } from "./CartProvider";

interface ContextProps {
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  impuesto: number;
  total: number;
  shippingAddress?: ShippingAddress;
  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  removeProduct: (product: ICartProduct) => void;
  isLoaded: boolean;
}

export const CartContext = createContext({} as ContextProps);
