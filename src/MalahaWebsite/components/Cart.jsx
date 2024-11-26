import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { CartContext } from "../Contexts/CartContext";
import { FirebaseContext } from "../Firebase/FirebaseContext";
import { toast } from "react-toastify";

const ProductCard = ({ image, title, price, weight }) => {
  const { cartitems, setCartItems } = useContext(CartContext); // context for cart
  const { isLoggedIn, setIsLoggedIn } = useContext(FirebaseContext); // context for cart

  //  console.log(cartitems)

  // addtoCart
  function addtoCart() {
    if (isLoggedIn === true) {
      setCartItems([...cartitems, { title, price, weight }]);
    } else {
      toast("Please Login First");
      // setIsLoggedIn(false); // set loggedin to false to prevent adding items to cart while logged out
    }
  }
  return (
    <div className="w-[150px] sm:w-[180px] md:w-[220px] rounded-lg overflow-hidden shadow-lg text-center bg-white m-3 transition duration-300 sm:hover:scale-[115%] border">
      <img className="w-full h-28 object-cover" src={image} alt="Product" />
      <div className=" pt-2">
        <div className="font-semibold text-md uppercase "> {title}</div>
      </div>
      <div className=" pb-2 flex justify-around">
        <span className="text-lg text-gray-900 ">
          ${price} <span className="text-[13px]"> {weight}</span>
        </span>
        <span>
          <FaCartPlus
            className="inline text-green-600 text-[22px] hover:text-green-900"
            onClick={addtoCart}
          />
        </span>
      </div>
      {/* <div className="pb-4">
        <button className="w-[50px]  bg-gradient-to-r from-green-800 via-green-500 to-green-800 text-white text-[10px] font-bold py-2 px-4 rounded-lg">
        Cart
        </button>
      </div> */}
    </div>
  );
};

export default ProductCard;
