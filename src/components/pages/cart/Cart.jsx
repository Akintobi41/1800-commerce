import { MyContext } from "../../../contexts/MyContext";
import s from "./s_Cart.module.css";
import { useContext } from "react";
import useResetSearchAndMenu from "../../../hooks/useResetSearchAndMenu";

const Cart = () => {
  const { setSearch, setMenuToggle, cart, setCart } =
    useContext(MyContext);
  useResetSearchAndMenu(setSearch, setMenuToggle);

  return <section className={s["cart-section"]}></section>;
};

export default Cart;
