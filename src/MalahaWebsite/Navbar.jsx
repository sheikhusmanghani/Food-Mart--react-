import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./is-ki.css";
import "../index.css";
import Sidebar from "./components/Sidebar";

function Header() {
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
        <NavLink
          to="form"
          className="hover:text-gray-900 transition-colors duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-br-full rounded-tl-full text-center pb-1 pt-1.5 uppercase w-[110px] text-[15px]"
        >
          Sign In
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hi dden flex flex-col items-end text-center">
        <Sidebar />
      </div>

      {/*  sign in btn in navbar  */}
      {/* <NavLink
        to={"form"}
        className="md:inline-block hidden hover:text-gray-900 font-bold transition-colors duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-br-full rounded-tl-full text-center py-1.5 uppercase w-[120px] text-[17px]"
      >
        Sign in
      </NavLink> */}
      {/* <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-300"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button> */}

      {/* Mobile Menu */}
      {/* <div
          className={`${
            showMenu ? "flex" : "hidden"
          } flex-col items-center bg-gray-100  border-4 border-gray-200 border-spacing-0.5 p-4 absolute top-16 right-4 w-40 rounded-md shadow-lg space-y-3 transition-all duration-500 ease-in-out transform ${
            showMenu ? "scale-100" : "scale-0"
          }`}
        >
          <NavLink
            to="/"
            className="block text-gray-700 hover:text-gray-900 "
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="block text-gray-700 hover:text-gray-900 "
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-700 hover:text-gray-900  "
          >
            Contact
          </NavLink> */}
      {/* for sign in and up on mobile view */}
      {/* <NavLink
            to="/form"
            className="block text-gray-700 hover:text-gray-900 transition-colors duration-300 "
          >
            Sign in . up
          </NavLink> */}
      {/* </div> */}
    </header>
  );
}

export default Header;
