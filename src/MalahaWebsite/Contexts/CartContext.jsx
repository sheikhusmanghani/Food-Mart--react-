// import { createContext ,useState} from "react";

// export const CartContext = createContext(null);

// const CartProvider = ({ children }) => {
//   const [cartitems, setCartItems] = useState([]);

//   return (
//     <CartContext.Provider value={{ cartitems, setCartItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartitems, setCartItems] = useState([]);

  // Load cart items from localStorage on mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  // Save cart items to localStorage whenever cartitems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartitems));
  }, [cartitems]);

  return (
    <CartContext.Provider value={{ cartitems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
