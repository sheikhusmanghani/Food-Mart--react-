import ProductCard from "./Cart";
import { veggiesData } from "./productDetails.js";
 

const Veggies = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {veggiesData.map((arrObj, ind) => {
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

export default Veggies;
