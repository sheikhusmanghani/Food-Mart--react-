import React, { useContext } from "react";
import { FirebaseContext } from "../Firebase/FirebaseContext";
import { errortoast, successtoast } from "../common Components/Alert";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //
  // this state is for getting states from Firebase
  const { loginData, setLoginData } = useContext(FirebaseContext);
  // for navigate
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault(); 

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      successtoast("Login Successful ! ");
      setTimeout(() => {
        navigate("/shop");
      }, 1000);
      //
    } catch (error) {
      errortoast(error.message);
    }
  };

  //  this function is for Login  change handle
  const loginhandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <form className="space-y-4" onSubmit={login}>
      <div className="relative">
        <input
          type="email"
          name="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 "
          placeholder="Email"
          required
          onChange={loginhandler}
          value={loginData.email}
        />
        <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
      </div>
      <div className="relative">
        <input
          type="password"
          name="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 "
          placeholder="Password"
          required
          onChange={loginhandler}
          value={loginData.password}
        />
        <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
      </div>
      <button className="w-full mainColor py-2 rounded-md hover:opacity-90 transition-all duration-300 transform hover:scale-105">
        Login
      </button>
    </form>
  );
};

export default Login;
