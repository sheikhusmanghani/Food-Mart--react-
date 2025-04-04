import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./MalahaWebsite/Contact";
import FullWeb from "./MalahaWebsite/FullWeb";
import Home from "./MalahaWebsite/Home";
import NotFound from "./MalahaWebsite/NotFound";
import "./index.css";
import { FirebaseProvider } from "./MalahaWebsite/Firebase/FirebaseContext";
import AdminPanel from "./MalahaWebsite/adminPanel";
import BothForms from "./MalahaWebsite/LoginSignupForm/bothForms";

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
        // element: '< />',
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
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/form",
          element: <BothForms />,
        },
        // {
        //   path: "/carts",
        //   element: <Dashboard />,
        // },
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
  return (
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  );
};

export default App;
