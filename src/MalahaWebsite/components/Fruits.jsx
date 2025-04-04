import { useEffect, useState } from "react";
import { db } from "../Firebase/FirebaseConfig.jsx";
import ProductCard from "./Cart";
// import { fruitsData } from "./productDetails.js";
import { collection, query, where, getDocs } from "firebase/firestore";

const Fruits = () => {
  const [fruitsData, setFruitsData] = useState([]);

  const getData = async () => {
    const q = query(
      collection(db, "products"),
      where("category", "==", "fruits")
    );
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
      console.log(doc.id, " ===> ", doc.data());
    });
    setFruitsData(data);
    console.log(" ===> ", querySnapshot);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getData();
        console.log("Data fetched successfully");
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {fruitsData?.map((arrObj) => {
        const { image, price, unit, name, _id } = arrObj;

        return (
          <ProductCard
            key={_id}
            // id={id}
            image={image}
            title={name}
            price={price}
            weight={unit}
          />
        );
      })}
    </div>
  );
};

export default Fruits;
