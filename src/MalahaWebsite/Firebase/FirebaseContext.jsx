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

  // state for login checking
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("isloggedin==> ", isLoggedIn);

  onAuthStateChanged(auth, (user) => {
    //
    if (user) {
      console.log("Login hy");
      setIsLoggedIn(true);
      //
    } else {
      setIsLoggedIn(false);
      console.log("Logout hy");
    }
  });

  return (
    <FirebaseContext.Provider
      value={{
        signupData,
        setSignupData,
        loginData,
        setLoginData,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
