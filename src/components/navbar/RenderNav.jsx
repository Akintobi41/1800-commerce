/* eslint-disable react/prop-types */
import React from "react";
import s from "./s_Navbar.module.css";
import Logo from ".//../logo/Logo";
const RenderNav = ({
  search,
  setSearch,
  menuToggle,
  setMenuToggle,
}) => {
  const menu = ["menuToggle", "p", "cart-section"];

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
                    type="search"
                    className={s.search}
                  />
                  <section className={s["cart-section"]}>
                    <img
                      src="Images/cart-icon.svg"
                      alt="cart"
                      className={s.cart}
                    />
                    <div className={s["cart-figure"]}>
                      <p className={s["cart-text"]}>0</p>
                    </div>
                  </section>{" "}
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
