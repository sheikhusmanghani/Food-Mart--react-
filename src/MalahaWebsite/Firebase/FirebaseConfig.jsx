import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { FirebaseContext } from "./FirebaseContext";

const firebaseConfig = {
  apiKey: "AIzaSyAGqtnyeNjjSaTSBeLB3IA7Qi3ZAk6LhGo",
  authDomain: "foodmart-ea0ae.firebaseapp.com",
  projectId: "foodmart-ea0ae",
  storageBucket: "foodmart-ea0ae.appspot.com",
  messagingSenderId: "123748390706",
  appId: "1:123748390706:web:f9b8fc02362885892ae92b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
