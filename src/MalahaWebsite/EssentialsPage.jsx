import React, { useEffect, useState } from "react";
import { getData } from "./Components/HelperFunctions";
import ProductCard from "./Components/ProductCard";

const EssentialsPage = () => {
  const [essentialsList, setEssentialsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      const data = await getData("essentials");
      setEssentialsList(data);
      setLoading(false); // Done loading
      console.log("data==>", data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center">
      {/* data fetch hoga to LOADING hogi or agar products no hoy to NO FRUIT likha aayga */}
      {loading ? (
        <div
          id="loader"
          style={{ width: "70px", height: "70px", borderWidth: "5px" }}
        ></div>
      ) : (
        essentialsList?.length === 0 && (
          <div className="text-center text-2xl font-bold text-gray-500 mt-6">
            No veggies available
          </div>
        )
      )}

      {/* Products */}
      {essentialsList?.map((item) => (
        <ProductCard
          key={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
          weight={item.weight}
          _id={item._id}
        />
      ))}
    </div>
  );
};

export default EssentialsPage;
