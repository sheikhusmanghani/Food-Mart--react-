import ProductCard from "./Cart";
import { essentialsData } from "./productDetails.js";

const EssentialsData = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {essentialsData.map((itemObj, ind) => {
        const { imgSrc, price, weight, title, id } = itemObj;

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

export default EssentialsData;
