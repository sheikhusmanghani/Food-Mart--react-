import React, { useState } from "react";
import '../../index.css'
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { MdAddShoppingCart, MdOutlineFeedback } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { CgMenu } from "react-icons/cg";

export default function Sidebar() {
  // Sidebar visibility state
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Menu Icon */}
      <div className="pt-2">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 text-3xl focus:outline-none"
        >
          {isOpen ? (
            <CgMenu className="h-6 w-8 text-3xl" />
          ) : (
            <HiMenu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Food Mart
          </h2>
          <ul className="sidebarLinks space-y-2">
            <li>
              <NavLink
                to={"/home"}
                className="flex items-center p-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <HomeIcon className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className="flex items-center p-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <MdAddShoppingCart className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="flex items-center p-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <MdOutlineFeedback className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Contact</span>
              </NavLink>
            </li>
            <li>
              <Link
                to={"/dashboard"}
                className="flex items-center p-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <PresentationChartBarIcon className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            {/* <li>
              <Link to={}
                
                className="flex items-center p-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <ShoppingBagIcon className="h-5 w-5 text-gray-500" />
                <span className="ml-3">E-Commerce</span>
              </Link>
            </li> */}
            {/* <li>
              <Link to={}
                
                className="flex items-center justify-between p-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <div className="flex items-center">
                  <InboxIcon className="h-5 w-5 text-gray-500" />
                  <span className="ml-3">Inbox</span>
                </div>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
                  14
                </span>
              </Link>
            </li> */}
            <li>
              <Link className="flex items-center p-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                <UserCircleIcon className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Profile</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center p-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                <Cog6ToothIcon className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Settings</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center p-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                <PowerIcon className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Log Out</span>
              </Link>
            </li>
            {/* <li>
              <Link to={}
                
                className="flex items-center p-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <PowerIcon className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Sign In </span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    </div>
  );
}
