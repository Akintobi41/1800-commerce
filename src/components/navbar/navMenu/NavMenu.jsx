/* eslint-disable react/prop-types */
import { lazy, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBodyOverflow = lazy(() =>
  import("../navBody/NavBodyOverflow")
);
const TopNav = lazy(() => import("./../topNav/TopNav"));
const NavSection = lazy(() =>
  import("../navSection/NavSection")
);

function NavMenu({ Logo, modal, cartIcon }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const navMenu = useRef(null);
  const cart = useSelector((state) => state.cart.products);
  const total = cart
    .map((item) => item.quantity)
    .reduce((first, second) => first + second, 0);
  const menu = ["menuToggle", "p", "cart-section"];

  return (
    <>
      <NavBodyOverflow
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
      />
      <section className="flex w-full justify-between">
        <TopNav
          menuToggle={menuToggle}
          section={
            <NavSection setMenuToggle={setMenuToggle} />
          }
        />
        <section className="flex w-full lg:w-[60%] justify-between items-center">
          {menu.map((section, i) => (
            <section key={section}>
              {section === "p" ? (
                <> {Logo} </>
              ) : (
                <button
                    key={section}
                    aria-label= 'hamburger-icon'
                    data-testid = 'hamburger-icon'
                    className={
                    !i
                      ? "flex relative w-8 items-center h-6 cursor-pointer lg:invisible lg:opacity-0 lg:hidden md:justify-end"
                      : "flex items-center justify-end"
                  }
                  onClick={
                    !i
                      ? () => setMenuToggle(!menuToggle)
                      : null
                  }
                  ref={!i ? navMenu : null}
                >
                  {!i ? ( // if index is equals to zero this is for the navigation menu
                    <section
                      className={` border-l-indigo-400 relative w-3 h-[.115rem] transition-[transform] duration-700 before:content-[''] hover:bg-[var(--pry-col)] before:hover:bg-[var(--pry-col)] after:hover:bg-[var(--pry-col)] before:block before:w-[1rem] before:h-[.11rem] before:transition-[rotate] before:duration-700 before:bg-black  before:absolute after:content-[''] after:block after:w-[1rem] after:transition-[rotate] after:duration-700 after:h-[.115rem] after:bg-black ${
                        menuToggle
                          ? "bg-[transparent] hover:bg-transparent before:translate-y-0 before:-rotate-45 after:w-4 after:translate-y-0 after:rotate-45"
                          : "bg-black before:-translate-y-[5px] after:translate-y-[5px] hover:bg-[transparent]"
                      }`}
                    ></section>
                  ) : (
                    <>
                      {modal}
                          <Link
                            data-testid = 'cart-icon'
                        className="relative flex justify-center items-center cursor-pointer ml-2"
                        to={"/cart"}
                      >
                        {cartIcon}
                        <div className="absolute -right-[5px] -top-[3px] bg-[var(--black)] text-[var(--white)] w-5 h-5 flex justify-center items-center rounded-[50%] hover:bg-[var(--pry-col)]">
                          <p className="text-[var(--white)]">
                            {total}
                          </p>
                        </div>
                      </Link>{" "}
                    </>
                  )}
                </button>
              )}
            </section>
          ))}
        </section>
      </section>
    </>
  );
}
export default NavMenu;
