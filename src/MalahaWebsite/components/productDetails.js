//   fruits
import Apple from "../../../public/images/apple.jpeg";
import Banana from "../../../public/images/banaa.jpeg";
import kiwi from "../../../public/images/Kiwi.jpeg";
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
const fruitsData = [
  {
    id: 1,
    title: "Apple",
    price: 2.99,
    weight: "(1 Kg)",
    imgSrc: Apple,
    count: 1,
  },
  {
    id: 2,
    title: "Banana",
    price: 1.29,
    weight: "(1 Dozen)",
    imgSrc: Banana,
    count: 1,
  },
  {
    id: 3,
    title: "Kiwi",
    price: 0.89,
    weight: "(1 Kg)",
    imgSrc: kiwi,
    count: 1,
  },
  {
    id: 4,
    title: "watermelon",
    price: 1.99,
    weight: "(1 Piece)",
    imgSrc: watermelon,
    count: 1,
  },
  {
    id: 5,
    title: "Strawberry",
    price: 3.49,
    weight: "(1 Box)",
    imgSrc: Strawberry,
    count: 1,
  },
  {
    id: 6,
    title: "Mango",
    price: 2.49,
    weight: "(1 Kg)",
    imgSrc: mango,
    count: 1,
  },
  {
    id: 7,
    title: "Fruits Basket",
    price: 6.99,
    weight: "(5 Kg)",
    imgSrc: FruitBasket,
    count: 1,
  },
];

const veggiesData = [
  {
    id: 8,
    title: "Carrot",
    price: 0.89,
    weight: "(1 Kg)",
    imgSrc: Carrot,
    count: 1,
  },
  {
    id: 9,
    title: "Onion",
    price: 1.29,
    weight: "(1 Kg)",
    imgSrc: onion,
    count: 1,
  },
  {
    id: 10,
    title: "Broccoli",
    price: 0.99,
    weight: "(1 Piece)",
    imgSrc: Broccoli,
    count: 1,
  },
  {
    id: 11,
    title: "Capsicum",
    price: 1.49,
    weight: "(1 Pack)",
    imgSrc: Shimla,
    count: 1,
  },
  {
    id: 12,
    title: "Potato",
    price: 0.69,
    weight: "(1 Kg)",
    imgSrc: potato,
    count: 1,
  },
  {
    id: 13,
    title: "Tomato",
    price: 1.99,
    weight: "(1 Kg)",
    imgSrc: Tomato,
    count: 1,
  },
  {
    id: 14,
    title: "CauliFlower",
    price: 0.99,
    weight: "(1 Piece)",
    imgSrc: cauliflower,
    count: 1,
  },
];

const essentialsData = [
  {
    id: 15,
    title: "Bottles",
    price: 3.89,
    weight: "(3 bottles)",
    imgSrc: bottles,
    count: 1,
  },
  {
    id: 16,
    title: "Basket",
    price: 1.29,
    weight: "(1 Piece)",
    imgSrc: basket,
    count: 1,
  },
  {
    id: 17,
    title: "Cleaners",
    price: 0.99,
    weight: "(1 Pack)",
    imgSrc: harpic,
    count: 1,
  },
  {
    id: 18,
    title: "Towels",
    price: 1.49,
    weight: "(1 Piece)",
    imgSrc: towels,
    count: 1,
  },
  {
    id: 19,
    title: "Plates",
    price: 0.69,
    weight: "(1 Set)",
    imgSrc: plates,
    count: 1,
  },
  {
    id: 20,
    title: "Soaps",
    price: 1.99,
    weight: "(1 Pack)",
    imgSrc: soaps,
    count: 1,
  },
  {
    id: 21,
    title: "Suitcase",
    price: 9.99,
    weight: "(1 Piece)",
    imgSrc: suitcase,
    count: 1,
  },
];

export { fruitsData, veggiesData, essentialsData };
