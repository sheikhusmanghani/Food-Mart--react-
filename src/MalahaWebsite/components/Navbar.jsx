import { Link, NavLink } from "react-router-dom";
import "../LocalStyling.css";
import "../../index.css";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { FirebaseContext } from "../Firebase/FirebaseContext";

function Header() {
  const { isLoggedIn } = useContext(FirebaseContext);

  return (
    <header className="w-full fixed top-0 grid grid-cols-3  py-2 px-5  bg-gray-100 shadow-md z-20">
      {/* Logo / Title */}
      <Link
        className="col-start-1 w-[210px] h-10 px-8 pt- flex items-center transition-colors duration-500 bg-gradient-to-r from-green-800 via-green-500 to-green-700 rounded-tl-full rounded-br-full font-bold text-2xl uppercase italic text-white hover:text-gray-900 "
        style={{ whiteSpace: "nowrap" }}
      >
        Food Mart
      </Link>

      {/* Desktop Menu */}
      <nav className="col-start-2 hidden md:flex md:justify-center md:items-center md:gap-3 font-semibold text-gray-700 ">
        <NavLink
          to="/"
          className="hover:text-gray-900 transition-colors duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-br-full rounded-tl-full text-center pb-1 pt-1.5 px-4 uppercase w-[110px] text-[15px]"
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className="hover:text-gray-900 transition-colors duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-br-full rounded-tl-full text-center pb-1 pt-1.5 px-4 uppercase w-[110px] text-[15px]"
        >
          Shop
        </NavLink>

        {!isLoggedIn && (
          <NavLink
            to="form"
            className="hover:text-gray-900 transition-colors duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-br-full rounded-tl-full text-center pb-1 pt-1.5 px-4 uppercase w-[110px] text-[15px]"
          >
            Join Us
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink
            to="carts"
            className="relative hover:text-gray-900 transition-colors duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-br-full rounded-tl-full text-center pb-1 pt-1.5 px-4 uppercase w-[110px] text-[15px]"
          >
            Carts
          </NavLink>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <div className="col-start-3 flex flex-col items-end text-center">
        {/* <h6 className="inline">Usman</h6> //yaha kaam nhi kr rha hy */}
        <Sidebar />
      </div>
    </header>
  );
}

export default Header;
