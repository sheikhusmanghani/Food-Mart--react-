import ProductCard from "./Cart";
import { essentialsData } from "./productDetails.js";

const EssentialsData = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {essentialsData.map((arrObj, ind) => {
        const { imgSrc, price, weight, title ,id} = arrObj;

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

export default EssentialsData;
