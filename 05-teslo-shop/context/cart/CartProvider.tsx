import React, { useEffect, useReducer } from "react";
import { ICartProduct } from "../../interfaces";
import { CartContext, cartReducer } from "./";
import Cookie from "js-cookie";

// interface state
export interface CartState {
  cart: ICartProduct[];
}

const initialState: CartState = {
  cart: [],
};

const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      let products = Cookie.get("cart") ? JSON.parse(Cookie.get("cart")!) : [];
      dispatch({
        type: "[CART] - LOAD FROM COOKIES | STORAGE ",
        payload: products,
      });
    } catch (e) {
      dispatch({
        type: "[CART] - LOAD FROM COOKIES | STORAGE ",
        payload: [],
      });
    }
  }, []);

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

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

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({
      type: "[CART] - CHANGE PRODUCT QTY",
      payload: product,
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
        updateCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
