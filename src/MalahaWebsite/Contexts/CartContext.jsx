import { createContext ,useState} from "react";

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
