import { Outlet } from "react-router-dom";
import "./is-ki.css";
import Header from "./Navbar";
import Footer from "./Footer";

const FullWeb = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default FullWeb;
