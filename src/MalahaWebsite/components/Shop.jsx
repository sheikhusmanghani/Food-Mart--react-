import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/shop/fruits");
  }, []);
  return <div>Shop</div>;
};

export default Shop;
