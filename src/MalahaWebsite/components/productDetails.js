//   fruits
import Apple from "../../../public/images/apple.jpeg";
import Banana from "../../../public/images/banaa.jpeg";
import kiwi from "../../../public/images/kiwi.jpeg";
import mango from "../../../public/images/mango.jpg";
import Strawberry from "../../../public/images/Strawberry.jpeg";
import watermelon from "../../../public/images/watermelon.jpg";
import FruitBasket from "../../../public/images/fresh-fruits.jpg";
// veggies
import Carrot from "../../../public/images/carrot.jpeg";
import onion from "../../../public/images/Onion.webp";
import Tomato from "../../../public/images/tomato.jpeg";
import potato from "../../../public/images/potato.jpeg";
import cauliflower from "../../../public/images/cauliflower.jpg";
import Broccoli from "../../../public/images/Broccoli.jpeg";
import Shimla from "../../../public/images/shimla-mirch.webp";
// essentials
import harpic from "../../../public/images/harpic-bottles.jpg";
import plates from "../../../public/images/plates.jpeg";
import soaps from "../../../public/images/soaps.jpeg";
import towels from "../../../public/images/towels.jpeg";
import bottles from "../../../public/images/bottles.webp";
import basket from "../../../public/images/basket.jpeg";
import suitcase from "../../../public/images/suitcase.jpg";

// this is fruitsData
const fruitsData = [
  {
    id: 1,
    title: "Apple",
    price: 2.99,
    weight: "(1 Kg)",
    imgSrc: Apple,
  },
  {
    id: 2,
    title: "Banana",
    price: 1.29,
    weight: "(1 Dozen)",
    imgSrc: Banana,
  },
  {
    id: 3,
    title: "Kiwi",
    price: 0.89,
    weight: "(1 Kg)",
    imgSrc: kiwi,
  },
  {
    id: 4,
    title: "watermelon",
    price: 1.99,
    weight: "(1 Peice)",
    imgSrc: watermelon,
  },
  {
    id: 5,
    title: "Strawberry",
    price: 3.49,
    weight: "(1 Box)",
    imgSrc: Strawberry,
  },
  {
    id: 6,
    title: "Mango",
    price: 2.49,
    weight: "(1 Kg)",
    imgSrc: mango,
  },
  {
    id: 7,
    title: "Fruits Basket",
    price: 6.99,
    weight: "(5 Kg)",
    imgSrc: FruitBasket,
  },
];

const veggiesData = [
  {
    id: 8,
    title: "Carrot",
    price: 0.89,
    weight: "(1 Kg)",
    imgSrc: Carrot,
  },
  {
    id: 9,
    title: "Onion",
    price: 1.29,
    weight: "(1 Kg)",
    imgSrc: onion,
  },
  {
    id: 10,
    title: "Broccoli",
    price: 0.99,
    weight: "(1 Piece)",
    imgSrc: Broccoli,
  },
  {
    id: 11,
    title: "Capsicum",
    price: 1.49,
    weight: "(1 Pack)",
    imgSrc: Shimla,
  },
  {
    id: 12,
    title: "Potato",
    price: 0.69,
    weight: "(1 Kg)",
    imgSrc: potato,
  },
  {
    id: 13,
    title: "Tomato",
    price: 1.99,
    weight: "(1 Kg)",
    imgSrc: Tomato,
  },
  {
    id: 14,
    title: "CauliFlower",
    price: 0.99,
    weight: "(1 Piece)",
    imgSrc: cauliflower,
  },
];

const essentialsData = [
  {
    id: 15,
    title: "Bottles",
    price: 3.89,
    weight: "(3 bottles)",
    imgSrc: bottles,
  },
  {
    id: 16,
    title: "Basket",
    price: 1.29,
    weight: "(1 Piece)",
    imgSrc: basket,
  },
  {
    id: 17,
    title: "Cleaners",
    price: 0.99,
    weight: "(1 Pack)",
    imgSrc: harpic,
  },
  {
    id: 18,
    title: "Towels",
    price: 1.49,
    weight: "(1 Piecs)",
    imgSrc: towels,
  },
  {
    id: 19,
    title: "Plates",
    price: 0.69,
    weight: "(1 Set)",
    imgSrc: plates,
  },
  {
    id: 20,
    title: "Soaps",
    price: 1.99,
    weight: "(1 Pack)",
    imgSrc: soaps,
  },
  {
    id: 21,
    title: "Suitcase",
    price: 9.99,
    weight: "(1 Piece)",
    imgSrc: suitcase,
  },
];

export { fruitsData, veggiesData, essentialsData };
