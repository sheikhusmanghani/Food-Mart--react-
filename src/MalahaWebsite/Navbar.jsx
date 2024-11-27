import { NavLink } from "react-router-dom";
import "./is-ki.css";
import "../index.css";
import Sidebar from "./components/Sidebar";
import { useContext } from "react";
import { FirebaseContext } from "./Firebase/FirebaseContext";

function Header() {
  const { isLoggedIn } = useContext(FirebaseContext); 

  return (
    <header className="fixed w-full top-0 flex items-center justify-between sm:justify-between  py-3 px-5  bg-gray-100 shadow-md z-20">
      {/* Logo / Title */}
      <NavLink className="flex items-center h-10 px-10 transition-colors duration-500 bg-gradient-to-r from-green-800 via-green-500 to-green-700 rounded-tl-full rounded-br-full font-bold text-2xl uppercase italic text-white hover:text-gray-900 ">
        Food Mart
      </NavLink>

      {/* Desktop Menu */}
      <nav className="mainNavbar hidden md:flex justify-between items-center gap-2 font-semibold text-gray-700 ">
        <NavLink
          to="home"
          className="hover:text-gray-900 transition-colors duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-br-full rounded-tl-full text-center pb-1 pt-1.5 uppercase w-[110px] text-[15px]"
        >
          Home
        </NavLink>

        <NavLink
          to="shop"
          className="hover:text-gray-900 transition-colors duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-br-full rounded-tl-full text-center pb-1 pt-1.5 uppercase w-[110px] text-[15px]"
        >
          Shop
        </NavLink>

        <NavLink
          to="contact"
          className="hover:text-gray-900 transition-colors duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-br-full rounded-tl-full text-center pb-1 pt-1.5 uppercase w-[110px] text-[15px]"
        >
          Contact
        </NavLink>

        {!isLoggedIn && (
          <NavLink
            to="form"
            className="hover:text-gray-900 transition-colors duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-br-full rounded-tl-full text-center pb-1 pt-1.5 uppercase w-[110px] text-[15px]"
          >
            Join Us
          </NavLink>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hi dden flex flex-col items-end text-center">
        {/* <h6 className="inline">Usman</h6> //yaha kaam nhi kr rha hy */}
        <Sidebar />
      </div>
    </header>
  );
}

export default Header;
