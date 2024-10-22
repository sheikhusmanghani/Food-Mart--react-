import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { FirebaseContext } from "../Firebase/FirebaseContext";
import { errortoast, successtoast } from "../common Components/Alert";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../Firebase/FirebaseConfig";

const Signup = () => {
  //
  // this state is for getting states from Firebase
  const { signupData, setSignupData } = useContext(FirebaseContext);

  const signup = async (e) => {
    e.preventDefault();
    console.log(e.target);

    try {
      const usecredentials = await createUserWithEmailAndPassword(
        auth,
        signupData.email,
        signupData.password
      );
      e.target.reset();
      successtoast("User Successfully reated !");
      //
    } catch (error) {
      errortoast(error.message);
    }
  };

  //  this function is for user name , email and password / change handle
  const signuphandler = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  return (
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
        {/* <i className=" absolute left-3 top-3 text-gray-400"></i> */}
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
  );
};

export default Signup;