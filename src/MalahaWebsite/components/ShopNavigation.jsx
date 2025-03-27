import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShopTwo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/shop/fruits");
  }, []);
  return;
};

export default ShopTwo;
