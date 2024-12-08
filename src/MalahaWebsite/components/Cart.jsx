import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { CartContext } from "../Contexts/CartContext";
import { FirebaseContext } from "../Firebase/FirebaseContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, price, weight, id }) => {
  const { cartitems, setCartItems } = useContext(CartContext);
  const { isLoggedIn } = useContext(FirebaseContext);

  // Add to Cart Function
  function addtoCart() {
    if (isLoggedIn) {
      const newCartItem = { id, title, price, weight, image };

      // Get a fresh copy of cartitems
      const currentCartItems = [...cartitems];

      // Check if item already exists in the cart
      const isItemInCart = currentCartItems.some((item) => item.id === id);

      if (isItemInCart) {
        toast.info("Item is already in the cart!");
      } else {
        currentCartItems.push(newCartItem);

        // Update context and localStorage
        setCartItems(currentCartItems);
        localStorage.setItem("cartItems", JSON.stringify(currentCartItems));

        toast.success("Item added to cart!");
      }
    } else {
      toast.error(
        <>
          Please Login First ! <br />
          <a href="/form" style={{ color: "red", textDecoration: "underline" }}>
            Go to Forms
          </a>
        </>
      );
    }
  }

  return (
    <div className="w-[150px] sm:w-[180px] md:w-[220px] rounded-lg overflow-hidden shadow-lg text-center bg-white m-3 transition duration-300 sm:hover:scale-[115%] border">
      <img className="w-full h-28 object-cover" src={image} alt="Product" />
      <div className="pt-2">
        <div className="font-semibold text-md uppercase">{title}</div>
      </div>
      <div className="pb-2 flex justify-around">
        <span className="text-lg text-gray-900">
          ${price} <span className="text-[13px]"> {weight}</span>
        </span>
        <span>
          <FaCartPlus
            className="inline text-green-600 text-[22px] hover:text-green-900"
            onClick={addtoCart}
          />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
