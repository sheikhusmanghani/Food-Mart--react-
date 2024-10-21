import { NavLink, Link, Outlet } from "react-router-dom"; 

const Shop = () => {
  return (
    <div>
      <section className=" fi xed  w-full to p-1 5  left -auto  mt-[70px] bg-gradient-to-r from-green-800 via-green-500 to-green-700  text-white  ">
        <div className=" container mx-auto py-1 text-md uppercase text-center">
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
