import React, { createContext, useState } from "react";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  return (
    <FirebaseContext.Provider
      value={{ signupData, setSignupData, loginData, setLoginData }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
