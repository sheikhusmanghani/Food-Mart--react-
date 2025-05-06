import React, { useEffect, useState } from "react";
import { getData } from "./Components/HelperFunctions";
import ProductCard from "./Components/ProductCard";

const FruitsPage = () => {
  const [fruitsList, setFruitsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      const data = await getData("fruits");
      setFruitsList(data);
      setLoading(false); // Done loading
      console.log("data==>", data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center">
      {/* <ProductCard
        name="usman"
        weight="2 Kg"
        price="212"
        image="https://res-console.cloudinary.com/dp2y4fbqv/media_explorer_thumbnails/dd0d90782e3480821ebd3dba7740bb28/detailed"
      /> */}

      {/* data fetch hoga to LOADING hogi or agar products no hoy to NO FRUIT likha aayga */}
      {loading ? (
        <div
          id="loader"
          style={{ width: "70px", height: "70px", borderWidth: "5px" }}
        ></div>
      ) : (
        fruitsList?.length === 0 && (
          <div className="text-center text-2xl font-bold text-gray-500 mt-6">
            No fruits available
          </div>
        )
      )}

      {/* Products */}
      {fruitsList?.map((item) => (
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

export default FruitsPage;
