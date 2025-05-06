import { MdShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

const ProductCard = ({ image, name, price, weight, _id }) => {
  return (
    <div className="w-[150px] sm:w-[180px] md:w-[220px] rounded-lg overflow-hidden shadow-lg text-center bg-white m-2 transition duration-300 sm:hover:scale-[110%]">
      <img
        className="w-full h-28 object-cover"
        src={image}
        alt="Product Image"
      />

      <div className=" flex flex-col justify-center py-1">
        <p className="font-semibold text-lg uppercase ">{name}</p>

        <div className="flex justify-around ">
          <p >
            <span className="text-lg text-gray-900">$ {price}</span>
            <span className="text-sm"> ({weight})</span>
          </p>

          <MdShoppingCart
            className="text-2xl text-green-800 hover:text-green-900"
            onClick={() => {
              toast.success("Product added to cart!");
              console.log("Product ID:", _id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
