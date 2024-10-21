import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mx-auto py-5 px-1 grid gap-8 text-gray-600 bg-slate-100 min-h-[170px] border  border-gray-300    ">
      {/* Left Section */}
      <div className="lg:col-span-1">
        <h1 className="w-full text-3xl text-center font-bold text-gray-700  ">
          FOOD MART LIMITED COMPANY
        </h1>
        <p className="py-2 text-center">
          We Are Going To Build A Pieceful Invirement. If You Want To Join Us,
          So Reach Us On These Platform.
        </p>
        <div className="flex justify-around  mt-6">
          <FaFacebookSquare size={30} className="icon" />
          <FaInstagram size={30} className="icon" />
          <FaTwitterSquare size={30} className="icon" />
          <FaGithubSquare size={30} className="icon" />
          <FaDribbbleSquare size={30} className="icon" />
        </div>
      </div>

      {/* Right Section */}
      {/* <div className="lg:col-span-2 flex flex-wrap justify-around  mt-6">
        <div className="w-full sm:w-[45%] md:w-auto">
          <h6 className="font-medium text-gray-700">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>

        <div className="w-full sm:w-[45%] md:w-auto mt-4 sm:mt-0">
          <h6 className="font-medium text-gray-700">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>

        <div className="w-full sm:w-[45%] md:w-auto mt-4 sm:mt-0">
          <h6 className="font-medium text-gray-700">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>

        <div className="w-full sm:w-[45%] md:w-auto mt-4 sm:mt-0">
          <h6 className="font-medium text-gray-700">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
