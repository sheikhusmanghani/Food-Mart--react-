import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Bounce, Slide, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast styling
import { FirebaseProvider } from "./MalahaWebsite/Firebase/FirebaseContext.jsx";
import ProductsProvider from "./MalahaWebsite/ProductsContext/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </FirebaseProvider>
    <ToastContainer autoClose={1500} position="top-center" />
  </StrictMode>
);
