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
    // console.log(savedCartItems.length)
  }, []);

  // isme masla hy k jb refresh hrha h to cart items empty hyn
  // 
  // Save cart items in localStorage jb bhi cartitems change hoga
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartitems));
  // }, [cartitems]);

  return (
    <CartContext.Provider value={{ cartitems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
