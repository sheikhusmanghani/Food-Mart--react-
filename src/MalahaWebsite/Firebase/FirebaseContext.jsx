import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./FirebaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  // for checking login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // console.log("isloggedin==> ", isLoggedIn);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("auth--> ", "Login hy");
        setIsLoggedIn(true);
        //
      } else {
        setIsLoggedIn(false);
        console.log("auth--> ", "Logout hy");
      }
    });
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
       
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
