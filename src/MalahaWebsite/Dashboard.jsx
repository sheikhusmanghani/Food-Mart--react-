import { useContext } from "react";
import { FirebaseContext } from "./Firebase/FirebaseContext";
import { CartContext } from "./Contexts/CartContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { isLoggedIn } = useContext(FirebaseContext);
  const { cartitems } = useContext(CartContext);

  // If user is not logged in
  if (!isLoggedIn) {
    return <Navigate to="/form" />;
  }

  // Fallback to an empty array if cartitems is undefined or null
  const items = cartitems || [];

  // Calculate total price
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  // Count items
  const itemCount = items.length;

  return (
    <div className="mt-20 px-6 md:px-[150px] h-[80vh] flex flex-col">
      <h1 className="text-3xl font-medium text-center mb-6">Dashboard</h1>

      {/* Cart Items Section */}
      <div className="bg-white p-6 rounded shadow-lg overflow-y-auto flex-1">
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        {items.length > 0 ? (
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded shadow hover:bg-gray-200 transition"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.weight}</p>
                  </div>
                </div>
                <div className="text-lg font-bold text-gray-800">
                  ${item.price.toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center py-10">
            No items in the cart.
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
