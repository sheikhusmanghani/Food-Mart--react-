import { onAuthStateChanged } from "firebase/auth";
import { createContext, useCallback, useEffect, useState } from "react";
import { auth, db } from "./FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  // for checking login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserDetails, setCurrentUserDetails] = useState(null);

  const getCurrentUserDetails = useCallback(async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setCurrentUserDetails(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("auth--> ", "Login hy");
        setIsLoggedIn(true);

        // Only fetch if new user detected
        if (!currentUserDetails || currentUserDetails.uid !== user.uid) {
          getCurrentUserDetails(user.uid);
        }
      } else {
        setIsLoggedIn(false);
        setCurrentUserDetails(null);
        console.log("auth--> ", "Logout hy");
      }
    });

    return () => unsubscribe();
  }, []);

  // console.log("currentUserDetails", currentUserDetails); // ok

  return (
    <FirebaseContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUserDetails,
        getCurrentUserDetails,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
