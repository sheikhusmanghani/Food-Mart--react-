import ProductCard from "./Cart";
import { fruitsData } from "./productDetails.js";

const Fruits = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {fruitsData.map((arrObj) => {
        const { imgSrc, price, weight, title, id } = arrObj;

        return (
          <ProductCard
            key={id}
            id={id}
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
