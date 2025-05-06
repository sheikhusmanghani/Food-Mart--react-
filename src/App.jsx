import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FullWeb from "./MalahaWebsite/FullWeb";
import Home from "./MalahaWebsite/Home";
import NotFound from "./MalahaWebsite/NotFound";
import AdminPanel from "./MalahaWebsite/adminPanel";
import BothForms from "./MalahaWebsite/LoginSignupForm/bothForms";
import CartsPage from "./MalahaWebsite/CartsPage";
import ShopProducts from "./MalahaWebsite/ShopProducts";
import AdminProducts from "./MalahaWebsite/AdminProducts";
import FruitsPage from "./MalahaWebsite/FruitsPage";
import VeggiesPage from "./MalahaWebsite/VeggiesPage";
import EssentialsPage from "./MalahaWebsite/EssentialsPage";

const App = () => {
  // const { isLoggedIn } = useContext(FirebaseContext); // ok

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FullWeb />,
      errorElement: <NotFound />,
      children: [
        {
          index: "true",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <ShopProducts />,
          children: [
            {
              index: true,
              element: <FruitsPage />,
            },
            {
              path: "veggies",
              element: <VeggiesPage />,
            }, 
            {
              path: "essentials",
              element: <EssentialsPage />,
            }, 
          ],
        },
        {
          path: "/form",
          element: <BothForms />,
        },
        {
          path: "/carts",
          element: <CartsPage />,
        },
        {
          path: "/admin",
          element: <AdminPanel />,
        },
        {
          path: "/admin-products",
          element: <AdminProducts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
