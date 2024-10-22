import { NavLink, Outlet } from "react-router-dom";
import "../index.css";

const Shop = () => {
  return (
    <div className="">
      <section className="mt-[65px] bg-gradient-to-r from-green-800 via-green-500 to-green-700  text-white  ">
        <div className="shopPages container mx-auto py-2 text-md uppercase text-center">
          <NavLink to={"/shop/fruits"}>Fruits </NavLink>
          <NavLink to={"/shop/veggies"} className="mx-4 ">
            Veggies
          </NavLink>
          <NavLink to={"/shop/essentials"}>Essentials </NavLink>
        </div>
      </section>
      <section className="py-10 flex flex-wrap justify-center ">
        <Outlet />
      </section>
    </div>
  );
};

export default Shop;
