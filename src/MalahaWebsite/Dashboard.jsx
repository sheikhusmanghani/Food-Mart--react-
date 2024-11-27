import { useContext } from "react";
import { FirebaseContext } from "./Firebase/FirebaseContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { isLoggedIn } = useContext(FirebaseContext);
  console.log("dashboard", isLoggedIn);

  // if user is not logged in
  if (!isLoggedIn) {
    return <Navigate to="/form" />;
  }

  return (
    <div className="mt-20 text-3xl font-medium text-center">Dashboard</div>
  );
};

export default Dashboard;
