/* eslint-disable react/prop-types */
import s from "./s_Navbar.module.css";
const RenderNav = ({
  search,
  setSearch,
  menuToggle,
  setMenuToggle,
}) => {
  const menu = ["menuToggle", "p", "cart-section"];

  return (
    <section className={s["toggle-section"]}>
      {menu.map((section, i) =>
        section === "p" ? (
          <p className={s.logo} key={section}>
            1800Store
          </p>
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
                <input type="search" className={s.search} />
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
        )
      )}
    </section>
  );
};

export default RenderNav;
