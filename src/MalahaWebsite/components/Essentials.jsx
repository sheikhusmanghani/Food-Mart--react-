import ProductCard from "./Cart";
import { essentialsData } from "./productDetails.js";

const EssentialsData = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {essentialsData.map((arrObj, ind) => {
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

export default EssentialsData;
