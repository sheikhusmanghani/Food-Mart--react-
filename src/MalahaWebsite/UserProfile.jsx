import { useContext } from "react";
import { FirebaseContext } from "./Firebase/FirebaseContext";
import { Navigate } from "react-router-dom";

const UserProfile = () => {
  const { isLoggedIn } = useContext(FirebaseContext);
  console.log("dashboard", isLoggedIn);

  // if user is not logged in 
  if (isLoggedIn === false) {
    return <Navigate to="/form" />;
  }

  return (
    <div className="mt-20  text-3xl text-center font-medium">UserProfile</div>
  );
};

export default UserProfile;
