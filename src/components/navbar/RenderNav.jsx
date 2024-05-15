/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import s from "./s_Navbar.module.css";
import Logo from ".//../logo/Logo";
import { Link } from "react-router-dom";
import { MyContext } from "../../contexts/MyContext";

const RenderNav = () => {
  const menu = ["menuToggle", "p", "cart-section"];
  const {
    menuToggle,
    setMenuToggle,
    search,
    setSearch,
    cart,
    setCart,
  } = useContext(MyContext);

  return (
    <section className={s["toggle-section"]}>
      {menu.map((section, i) => (
        <React.Fragment key={section}>
          {section === "p" ? (
            <Logo />
          ) : (
            <section
              key={section}
              className={!i ? s.menu : s["search_cart"]}
              onClick={
                !i
                  ? () => setMenuToggle(!menuToggle)
                  : undefined
              }
            >
              {!i ? (
                <section
                  className={`${s["menu-toggle"]} ${
                    menuToggle ? s["active"] : ""
                  }`}
                ></section>
              ) : (
                <>
                  <img
                    src="/Images/search-icon.svg"
                    alt="search"
                    className={s["search-icon"]}
                    onClick={() => setSearch(!search)}
                  />
                  <input
                    name="search"
                    type="search"
                    className={s.search}
                  />
                  <Link
                    className={s["cart-section"]}
                    to={"/cart"}
                  >
                    <img
                      src="Images/cart-icon.svg"
                      alt="cart"
                      className={s.cart}
                    />
                    <div className={s["cart-figure"]}>
                      <p className={s["cart-text"]}>
                        {cart}
                      </p>
                    </div>
                  </Link>{" "}
                </>
              )}
            </section>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default RenderNav;
