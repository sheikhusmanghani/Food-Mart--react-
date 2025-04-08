import { Outlet } from "react-router-dom";
import "./LocalStyling.css";
import Header from "./Components/Navbar";
import Footer from "./Components/Footer";

const FullWeb = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This is where the child routes will be rendered */}
      <Footer />
    </>
  );
};

export default FullWeb;
