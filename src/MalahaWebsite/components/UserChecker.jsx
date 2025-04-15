import { useContext } from "react";
import { FirebaseContext } from "../Firebase/FirebaseContext";
import { FaUserCircle } from "react-icons/fa";

const UserChecker = () => {
  const { isLoggedIn, currentUserDetails } = useContext(FirebaseContext);
  // const { cartitems } = useContext(CartContext);
  // console.log(currentUserDetails.username); //ok

  // let itemsCount = cartitems.length;
  // let username = currentUserDetails.username?.[0] || "...";

  return (
    <div className="">
      {/* <p className="w-10 h-10 mr-2 flex justify-center items-center border-2 border-green-500 mainColor text-white uppercase font-bold text-xl rounded-full"> */}
        {/* s {username} */}
        <FaUserCircle  className="w-8 h-8 mr-2 text-green-600"/>
      {/* </p> */}
      {/* <span className="cart-badge bg-[#17a84c] px-1">{itemsCount}</span> */}
    </div>
  );
};

export default UserChecker;
