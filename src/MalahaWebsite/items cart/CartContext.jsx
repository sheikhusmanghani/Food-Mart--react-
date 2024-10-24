import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartitems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartitems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
