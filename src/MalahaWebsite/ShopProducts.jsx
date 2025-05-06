import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext/ProductsContext";
import { Link, NavLink, Outlet } from "react-router-dom";

const ShopProducts = () => {
  // const { col } = useContext(ProductsContext);
  // console.log(col);

  return (
    <div className="mt-14 ">
      {/* sub NAVIGATION for shop's categories */}
      <nav className="h-10 w-full mainColor flex items-center justify-center">
        <div className="bg-gray-100 px-6 sm:w-[330px] w-[300px] text-black flex items-center justify-between drop-shadow-sm rounded-tl-3xl rounded-br-3xl">
          <Link to={""}>Fruits</Link>
          <Link to={"veggies"}>Veggies</Link>
          <Link to={"essentials"}>Essentials</Link>
        </div>
      </nav>
      {/* Shop's Categories Page */}
      <section className="py-4 bg-gray-100 overflow-auto ">
        <Outlet />
      </section>
    </div>
  );
};

export default ShopProducts;
