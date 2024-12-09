import { useContext } from "react";
import { FirebaseContext } from "../Firebase/FirebaseContext";
import { CartContext } from "../Contexts/CartContext";

const UserChecker = () => {
  const { isLoggedIn, currentUserDetails } = useContext(FirebaseContext);
  const { cartitems } = useContext(CartContext);
  console.log(currentUserDetails.username); //ok

  let itemsCount = cartitems.length;
  let username = currentUserDetails.username?.[0] || "...";

  return isLoggedIn ? (
    <div className="relative">
      <p className="bg-[#17a84c] text-white uppercase font-bold text-xl rounded-full py-1 ml-1 px-2 ">
        {username}
      </p>
      <span className="cart-badge bg-[#17a84c] px-1">{itemsCount}</span>
    </div>
  ) : null;
};

export default UserChecker;
