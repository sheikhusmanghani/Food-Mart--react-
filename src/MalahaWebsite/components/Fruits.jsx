import ProductCard from "./Cart";
import { fruitsData } from "./productDetails.js";

const Fruits = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {fruitsData.map((arrObj, ind) => {
        const { imgSrc, price, weight, title } = arrObj;

        return (
          <ProductCard
            key={ind}
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

export default Fruits;
