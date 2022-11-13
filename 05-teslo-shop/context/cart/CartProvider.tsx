import React, { useReducer } from "react";
import { ICartProduct } from "../../interfaces";
import { CartContext, cartReducer } from "./";

// interface state
export interface CartState {
  cart: ICartProduct[];
}

const initialState: CartState = {
  cart: [],
};

const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProductToCart = (product: ICartProduct) => {
    const productInCart = state.cart.some((item) => item._id === product._id);

    if (!productInCart) {
      return dispatch({
        type: "[CART] - ADD PRODUCT ",
        payload: [...state.cart, product],
      });
    }

    const productInCartBySize = state.cart.some(
      (item) => item._id === product._id && item.size === product.size
    );

    if (!productInCartBySize) {
      return dispatch({
        type: "[CART] - ADD PRODUCT ",
        payload: [...state.cart, product],
      });
    }

    const updatedProducts = state.cart.map((item) => {
      if (item._id !== product._id) return item;
      if (item.size !== product.size) return item;

      item.qty += product.qty;
      return item;
    });

    dispatch({
      type: "[CART] - ADD PRODUCT ",
      payload: updatedProducts,
    });
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
