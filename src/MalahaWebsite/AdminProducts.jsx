import React from "react";
import { FaTrash } from "react-icons/fa";

const AdminProducts = () => {
  return (
    <div className="mt-20 px-3 ">
      <div className="w-[150px] sm:w-[180px] md:w-[220px] rounded-lg overflow-hidden shadow-lg text-center bg-white m-3 transition duration-300 sm:hover:scale-[110%] border">
        <img
          className="w-full h-28 object-cover"
          src="https://onlinefoodmart.netlify.app/assets/fresh-fruits-9SjXcNCp.jpg"
          alt="Product"
        />
        <div className="pt-2">
          <div className="font-semibold text-md uppercase">Fruites Basket</div>
        </div>
        <div className="pb-2 flex justify-around">
          <span className="text-lg text-gray-900">
            $ 300 <span className="text-[13px]"> (5 Kg)</span>
          </span>
          <span>
            <FaTrash className="inline text-red-600 text-[22px] hover:text-red-900" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
