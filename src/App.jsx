import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./MalahaWebsite/Shop";
import ShopTwo from "./MalahaWebsite/components/Shop";
import Contact from "./MalahaWebsite/Contact";
import FullWeb from "./MalahaWebsite/FullWeb";
import Home from "./MalahaWebsite/Home";
import NotFound from "./MalahaWebsite/NotFound";
import "./index.css";
import Fruits from "./MalahaWebsite/components/Fruits";
import Essentials from "./MalahaWebsite/components/Essentials";
import Veggies from "./MalahaWebsite/components/Veges";
import BothForms from "./MalahaWebsite/Form Page/bothForms";
import { FirebaseProvider } from "./MalahaWebsite/Firebase/FirebaseContext";
import Dashboard from "./MalahaWebsite/Dashboard";
import CartProvider from "./MalahaWebsite/items cart/CartContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FullWeb />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
          children: [
            {
              index: true,
              element: <ShopTwo />,
            },
            {
              path: "fruits",
              element: <Fruits />,
            },
            {
              path: "veggies",
              element: <Veggies />,
            },
            {
              path: "essentials",
              element: <Essentials />,
            },
          ],
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/form",
          element: <BothForms />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return (
    <FirebaseProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </FirebaseProvider>
  );
};

export default App;
