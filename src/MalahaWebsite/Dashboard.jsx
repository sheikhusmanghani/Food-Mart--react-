import { useContext } from "react";
import { FirebaseContext } from "./Firebase/FirebaseContext";
import { CartContext } from "./Contexts/CartContext";
import { Navigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { BiTrash } from "react-icons/bi";

const Dashboard = () => {
  const { isLoggedIn } = useContext(FirebaseContext);
  const { cartitems, setCartItems } = useContext(CartContext);

  // If user is not logged in
  if (!isLoggedIn) {
    return <Navigate to="/form" />;
  }

  // if cartitems is undefined or null...
  const items = cartitems || [];

  // Calculate total price
  const totalPrice = items.reduce(
    (prevItem, currentItem) => prevItem + currentItem.price,
    0
  );

  // Count items
  const itemCount = items.length;

  // handle item delete
  const handleItemDelete = (id) => {
    const updatedCartItems = items.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  // clear all cart items
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="mt-20 px-6 md:px-[150px] h-[80vh] flex flex-col">
      {/* Cart Items Section */}
      <div className="relative bg-white p-2 rounded text-center shadow-lg overflow-y-auto flex-1">
        <h2 className=" text-2xl uppercase font-bold mb-4">Cart Items</h2>
        <span title="Remove all items" className="absolute top-3 right-5">
          <BiTrash className="text-xl" onClick={handleClearCart} />
        </span>

        {items.length > 0 ? (
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded shadow-md hover:bg-gray-200 transition"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <div className="flex gap-2 items-center ">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.weight}</p>
                    </div>

                    {/* count down */}
                    <div>
                      <button
                        className="bg-gray-200 py-1 px-2 rounded text-sm font-bold hover:bg-gray-400"
                        // onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                      {/* <span className="text-lg">{item.count}</span> */}
                      <span className="text-lg mx-2">pr</span>
                      <button
                        className="bg-gray-200 py-1 px-2 rounded text-sm font-bold hover:bg-gray-400"
                        // onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold text-gray-800 flex flex-col items-end gap-4">
                  <p>
                    <MdClose
                      className="text-end "
                      onClick={() => handleItemDelete(item.id)}
                    />
                  </p>
                  <p> ${item.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center py-10">
            No item in the cart.
          </p>
        )}
      </div>

      {/* Summary Section */}
      <div className="mt-6 p-4 bg-gray-100 rounded shadow">
        <p className="text-lg font-semibold">
          Total Items: <span className="text-blue-600">{itemCount}</span>
        </p>
        <p className="text-lg font-semibold">
          Total Price:{" "}
          <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
