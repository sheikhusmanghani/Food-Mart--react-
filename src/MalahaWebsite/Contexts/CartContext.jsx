import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartitems, setCartItems] = useState([]);

  // Load cart items from localStorage on mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
    // console.log(savedCartItems.length)
  }, []);

  return (
    <CartContext.Provider value={{ cartitems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
