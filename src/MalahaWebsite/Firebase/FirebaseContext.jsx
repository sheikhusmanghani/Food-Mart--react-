import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "./FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  // for checking login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserDetails, setCurrentUserDetails] = useState({});

  async function getCurrentUserDetails(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data()); // ok
      setCurrentUserDetails(docSnap.data());
    } else {
      console.log("No such document!"); // docsnap undefined hoga yaha
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("auth--> ", "Login hy");
        setIsLoggedIn(true);
        getCurrentUserDetails(user.uid); // function uppar bana hua hy
      } else {
        setIsLoggedIn(false);
        console.log("auth--> ", "Logout hy");
      }
    });
  }, [isLoggedIn]);

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
