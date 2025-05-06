import { collection, getDocs, query, where } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { db } from "../Firebase/FirebaseConfig";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  

  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
