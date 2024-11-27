import { useContext } from "react";
import { FirebaseContext } from "../Firebase/FirebaseContext";

const UserChecker = () => {
  const { isLoggedIn, currentUserDetails } = useContext(FirebaseContext);
  //   console.log(currentUserDetails); //ok

  const username =
    currentUserDetails.username?.[0] + currentUserDetails.username?.[1];

  return isLoggedIn ? (
    <div>
      <p className="bg-[#17a84c] text-white font-bold text-xl rounded-full py-1 px-2 m-0 mr-2">
        {username || "..."}
      </p>
    </div>
  ) : null;
};

export default UserChecker;
