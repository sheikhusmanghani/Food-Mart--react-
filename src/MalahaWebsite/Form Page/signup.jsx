import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { auth, db } from "../Firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { VscGithubInverted } from "react-icons/vsc";
import { BsFacebook } from "react-icons/bs";

const Signup = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider(); // baad me kaam aay ga
  const githubProvider = new GithubAuthProvider(); // baad me kaam aay ga

  //  signup form data
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //------------------------------------------------ Google Sign-In Function
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      toast.success("User signed in successfully !");

      navigate("/shop");
    } catch (error) {
      toast.error(error.code.split("/")[1].split("-").join(" "));
    }
  };

  //------------------------------------------------ facebook Sign-In Function
  const signInWithFacebook = async () => {
    try {
      // await signInWithPopup(auth, facebookProvider);// not working
      toast.warning("please sign in with google");
      // toast.success("User signed in successfully !");

      // navigate("/shop");
    } catch (error) {
      toast.error(error.code.split("/")[1].split("-").join(" "));
    }
  };

  //------------------------------------------------ github Sign-In Function
  const signInWithGithub = async () => {
    try {
      // toast.warning("please sign in with google");
      const result = await signInWithPopup(auth, githubProvider); // not working
      const user = result.user;
      toast.success("User signed in successfully !");

      // navigate("/shop");
    } catch (error) {
      toast.error(
        error.code.split("/")[1].split("-").join(" ") || "Sign-in failed!"
      );
    }
  };

  //  --- --------- ----- -----------------------------    Signup Function
  const signupOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupData.email,
        signupData.password
      );

      toast.success("User signed in successfully !");

      navigate("/shop");

      // set in firestore
      await setDoc(doc(db, "users", userCredential.user.uid), signupData); // ok
      //
    } catch (e) {
      toast.error(e.code.split("/")[1].split("-").join(" "));
    }
  };

  // Signup Input Change Handler
  const signuphandler = (e) => {
    const { name, value } = e.target;
    // console.log(`Sign Up data : ${name} ${value}`);
    // Update form
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="space-y-4" onSubmit={signupOnSubmit}>
      {/* Full Name Input */}
      <div className="relative">
        <input
          type="text"
          name="username"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="Full Name"
          required
          onChange={signuphandler}
          value={signupData.username}
        />
        <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
      </div>

      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          name="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="Email"
          required
          onChange={signuphandler}
          value={signupData.email}
        />
        <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
      </div>

      {/* Password Input */}
      <div className="relative">
        <input
          type="password"
          name="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="Password"
          required
          onChange={signuphandler}
          value={signupData.password}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mainColor py-2 rounded-md hover:opacity-90 transition-all duration-300 transform hover:scale-105"
      >
        Sign Up
      </button>

      {/* Google Sign-In */}
      <div>
        <span
          className="w-full flex justify-center bg-gray-200 rounded-md py-2 text-gray-600 hover:scale-105 transition-all cursor-pointer"
          onClick={signInWithGoogle}
        >
          <FcGoogle className="text-2xl mr-3" />
          Continue With Google
        </span>
      </div>

      {/* Facebook Sign-In */}
      <div>
        <span
          className="w-full flex justify-center bg-gray-200 rounded-md py-2 text-gray-600 hover:scale-105 transition-all cursor-pointer"
          onClick={signInWithFacebook}
        >
          <BsFacebook className="text-2xl mr-3 text-blue-800" />
          Continue With Facebook
        </span>
      </div>

      {/* Github Sign-In */}
      <div>
        <span
          className="w-full flex justify-center bg-gray-200 rounded-md py-2 text-gray-600 hover:scale-105 transition-all cursor-pointer"
          onClick={signInWithGithub}
        >
          <VscGithubInverted className="text-2xl mr-3 text-black" />
          Continue With Github
        </span>
      </div>
    </form>
  );
};

export default Signup;
