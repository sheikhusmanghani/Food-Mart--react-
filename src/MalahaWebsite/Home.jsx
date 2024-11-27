import React from "react";
import vegePic from "../../public/images/fresh-vegetables.jpg";
import fruPic from "../../public/images/fresh-fruits.jpg";
import dairyPic from "../../public/images/dairy-products.avif";
import apple from "../../public/images/apple.jpeg";
import banana from "../../public/images/banaa.jpeg";
import carrot from "../../public/images/carrot.jpeg";
import milk from "../../public/images/milk.jpeg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 mt-[65px]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 via-green-500 to-green-700  text-white py-16">
        <div className="container mx-auto px-4 text-center text-wrap">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
            Fresh Fruits, Veggies & Essentials
          </h1>

          <p className="mt-4 mb-10 text-lg sm:text-xl">
            Delivering fresh and organic products straight to your door.
          </p>

          <NavLink
            to={"/shop"}
            className="  px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-green-800 hover:text-white transition duration-[400ms]"
          >
            Shop Now
          </NavLink>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">
            Shop by Category
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden  z-0 sm:hover:scale-[110%] transition duration-500">
              <img
                src={fruPic}
                alt="Fruits"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  Fresh Fruits
                </h3>
                <p className="mt-2 text-gray-600">
                  Delicious and organic fruits sourced from local farms.
                </p>
                <NavLink to={"/shop"}>
                  <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                    Shop Fruits
                  </button>
                </NavLink>
              </div>
            </div>

            {/*  card 2   */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden z-0 sm:hover:scale-[110%] transition duration-500">
              <img
                src={vegePic}
                alt="Vegetables"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  Fresh Vegetables
                </h3>
                <p className="mt-2 text-gray-600">
                  Organic and handpicked vegetables for your healthy meals.
                </p>
                <NavLink to={"/shop/veggies"}>
                  <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                    Shop Vegetables
                  </button>
                </NavLink>
              </div>
            </div>

            {/* card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden z-0 sm:hover:scale-[110%] transition duration-500">
              <img
                src={dairyPic}
                alt="Essentials"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  Daily Essentials
                </h3>
                <p className="mt-2 text-gray-600">
                  Shop essential items for your daily household needs.
                </p>
                <NavLink to={"/shop/essentials"}>
                  <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                    Shop Essentials
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">
            Featured Products
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden z-0 sm:hover:scale-[110%] transition duration-500">
              <img
                src={apple}
                alt="Product 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-700">
                  Organic Apples
                </h3>
                <p className="mt-2 text-gray-600">$4.99 per kg</p>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden z-0 sm:hover:scale-[110%] transition duration-500">
              <img
                src={carrot}
                alt="Product 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-700">Carrots</h3>
                <p className="mt-2 text-gray-600">$2.50 per kg</p>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden z-0 sm:hover:scale-[110%] transition duration-500">
              <img
                src={milk}
                alt="Product 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-700">Milk</h3>
                <p className="mt-2 text-gray-600">$1.20 per liter</p>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden z-0 sm:hover:scale-[110%] transition duration-500">
              <img
                src={banana}
                alt="Product 4"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-700">Bananas</h3>
                <p className="mt-2 text-gray-600">$1.99 per bunch</p>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
