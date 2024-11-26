import ProductCard from "./Cart";
import { veggiesData } from "./productDetails.js";

const Veggies = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {veggiesData.map((arrObj) => {
        const { id, imgSrc, price, weight, title } = arrObj;
        // console.log(id) // ok

        return (
          <ProductCard
            key={id}
            image={imgSrc}
            title={title}
            price={price}
            weight={weight}
          />
        );
      })}
    </div>
  );
};

export default Veggies;
