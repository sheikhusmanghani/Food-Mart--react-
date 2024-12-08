import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "./FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  // for checking login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserDetails, setCurrentUserDetails] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("auth--> ", "Login hy");
        setIsLoggedIn(true);

        (async () => {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          setCurrentUserDetails(docSnap.data());
        })();

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
        currentUserDetails,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
