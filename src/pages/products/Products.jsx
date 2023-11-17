import { MyContext } from "../../contexts/MyContext";
import useResetSearchAndMenu from "../../hooks/useResetSearchAndMenu";
import s from "./s_Products.module.css";
import { useContext } from "react";

const Products = () => {
  const { setSearch, setMenuToggle } =
    useContext(MyContext);

  useResetSearchAndMenu(setSearch, setMenuToggle);

  return (
    <section className={s["products-container"]}></section>
  );
};

export default Products;
