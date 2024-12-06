import { useContext } from "react";
import { FirebaseContext } from "../Firebase/FirebaseContext";
import { CartContext } from "../Contexts/CartContext";

const UserChecker = () => {
  const { isLoggedIn, currentUserDetails } = useContext(FirebaseContext);
  const {cartitems } = useContext(CartContext);
  // console.log(cartitems.length); //ok

  let username;
  if (currentUserDetails) {
   username = currentUserDetails.username?.[0] + currentUserDetails.username?.[1];
  }else{
    username = "...";
  } 

  return isLoggedIn ? (
    <div className="relative">
      <p className="bg-[#17a84c] text-white uppercase font-bold text-xl rounded-full py-1 ml-1 px-2 ">
        {username}
      </p>
      <span className="cart-badge bg-[#17a84c] px-1">{cartitems.length}</span>
    </div>
  ) : null;
};

export default UserChecker;
