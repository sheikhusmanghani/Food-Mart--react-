import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "./FirebaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  // initail states of logiin and signup forms data
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Login hy");
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      console.log("Logout hy");
    }
  });

  return (
    <FirebaseContext.Provider
      value={{ signupData, setSignupData, loginData, setLoginData }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
