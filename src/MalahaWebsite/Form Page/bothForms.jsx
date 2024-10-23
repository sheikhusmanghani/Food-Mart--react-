import React, { useState } from "react";
import Signup from "./signup";
import Login from "./login";

const BothForms = () => {
  const [tab, setTab] = useState("signup"); // for changing signup form to login

  return (
    <div className=" bg-gray-100 pt-[100px] pb-10 flex items-center justify-center">
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

          {tab === "signup" && <Signup />}

          {/*  if login form active */}

          {tab === "login" && <Login />}
        </div>
      </div>
    </div>
  );
};

export default BothForms;
