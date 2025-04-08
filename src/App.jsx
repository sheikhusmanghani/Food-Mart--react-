import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import FullWeb from "./MalahaWebsite/FullWeb";
import Home from "./MalahaWebsite/Home";
import NotFound from "./MalahaWebsite/NotFound";
import { FirebaseContext } from "./MalahaWebsite/Firebase/FirebaseContext";
import AdminPanel from "./MalahaWebsite/adminPanel";
import BothForms from "./MalahaWebsite/LoginSignupForm/bothForms";
import { useContext } from "react";
import CartsPage from "./MalahaWebsite/CartsPage";
import ShopProducts from "./MalahaWebsite/ShopProducts";
// import Contact from "./MalahaWebsite/Contact";

const App = () => {
  const { isLoggedIn } = useContext(FirebaseContext); // ok

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
          path: "/home",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <ShopProducts />,
          // children: [
          //   {
          //     index: true,
          //     element: <ShopTwo />,
          //   },
          //   {
          //     path: "fruits",
          //     element: <Fruits />,
          //   },
          //   {
          //     path: "veggies",
          //     element: <Veggies />,
          //   },
          //   {
          //     path: "essentials",
          //     element: <Essentials />,
          //   },
          // ],
        },
        // {
        //   path: "/contact",
        //   element: <Contact />,
        // },
        {
          path: "/form",
          element: <BothForms />,
        },
        {
          path: "/carts",
          element: isLoggedIn ? <CartsPage /> : <Navigate to={"/form"} />,
        },
        {
          path: "/admin",
          element: <AdminPanel />,
        },
        // {
        //   path: "/support",
        //   element: <DataDeletation />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
