import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FirebaseContext } from "../Firebase/FirebaseContext";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../Firebase/FirebaseConfig";
import { successtoast, errortoast } from "../common Components/Alert"; 
import "../is-ki.css";
import "../../index.css";


const LoginSignup = () => {
  const [tab, setTab] = useState("signup"); // for changing signup form to login

  // this state is for getting states from Firebase
  const { signupData, setSignupData, loginData, setLoginData } =
    useContext(FirebaseContext);

  //  this function is for user name , email and password / change handle
  const signuphandler = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const signup = async (e) => {
    e.preventDefault();
    console.log(e.target);

    try {
      const usecredentials = await createUserWithEmailAndPassword(
        auth,
        signupData.email,
        signupData.password
      );
      successtoast("User Successfully reated !");
      // e.target.reset();
      //
    } catch (error) {
      console.log(error);
      errortoast(error.message);
    }
  };

  //  this function is for Login  change handle
  const loginhandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    // console.log(loginData);
  };

  return (
    <div className=" bg-gray-300 pt-[100px] pb-10 flex items-center justify-center">
      <div className="w-[90vw] max-w-lg bg-white rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <div className=" text-center py-6 mainColor">
          <h1 className="text-3xl font-bold ">Welcome</h1>
          <p className="">Join our amazing community</p>
        </div>
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setTab("signup")}
              className={`px-4 py-2 rounded-l-md focus:outline-none transition-all duration-300 ${
                tab === "signup"
                  ? "mainColor font-semibold"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setTab("login")}
              className={`px-4 py-2 rounded-r-md focus:outline-none transition-all duration-300 ${
                tab === "login"
                  ? "mainColor font-semibold"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Login
            </button>
          </div>

          {/*  if signup form active */}

          {tab === "signup" && (
            <form className="space-y-4" onSubmit={signup}>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 "
                  placeholder="Full Name"
                  required
                  onChange={signuphandler}
                  value={signupData.username}
                />
                <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 "
                  placeholder="Email"
                  required
                  onChange={signuphandler}
                  value={signupData.email}
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
                  onChange={signuphandler}
                  value={signupData.password}
                />
                <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
              </div>
              <button className="w-full mainColor py-2 rounded-md hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                Sign Up
              </button>
              <div>
                <div className="w-full flex justify-center bg-gray-200 bor der -2 text-green- bo rder -green-700 rounded-md py-2 text-gray-600 hover:scale-105 transition-all ">
                  <FcGoogle className="text-2xl  mr-3" />
                  Continue With Google
                </div>
              </div>
            </form>
          )}

          {/*  if login form active */}

          {tab === "login" && (
            <form className="space-y-4">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
