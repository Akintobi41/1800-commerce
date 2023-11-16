import { MyContext } from "../../contexts/MyContext";
import s from "./s_Cart.module.css";
import { useContext, useEffect } from "react";

const Cart = () => {
  const { setSearch } = useContext(MyContext);

  useEffect(() => {
    setSearch(false);
  }, []);

  return <section className={s["cart-section"]}></section>;
};

export default Cart;
