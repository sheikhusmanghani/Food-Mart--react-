import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" mx-auto py-5 px-1 grid gap-8 text-gray-600 mainColor min-h-[170px] border  border-gray-300 shadow-2xl ">
      {/* Left Section    & Right Section is'nt ready  */}
      <div className="lg:col-span-1">
        <h1 className="w-full text-3xl text-center font-bold    ">
          FOOD MART LTD COMPANY
        </h1>
        <p className="p-2 text-center">
          "Fresh, quality ingredients at unbeatable prices! Shop with us for all
          your grocery needs. Fast delivery & friendly service. © FoodMart"
        </p>
        <div className="flex justify-around  mt-6">
          <FaFacebookSquare size={30} className="icon" />
          <FaSquareInstagram size={30} className="icon" />
          <FaTwitterSquare size={30} className="icon" />
          <FaGithubSquare size={30} className="icon" />
          <FaDribbbleSquare size={30} className="icon" />
        </div>
      </div>
      {/* Right Section */} {/* need to improve */}
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
