/* eslint-disable react/prop-types */
import { lazy, Suspense, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingAnimation from "../../loadingAnimation/Loader";
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

  return (
    <>
      <Suspense fallback={<LoadingAnimation />}>
        <NavBodyOverflow
          menuToggle={menuToggle}
          setMenuToggle={setMenuToggle}
        />
        <div
          data-testid="section"
          className="flex size-full items-end justify-between"
        >
          <TopNav
            menuToggle={menuToggle}
            section={
              <NavSection setMenuToggle={setMenuToggle} />
            }
          />
          <section className="flex w-full lg:w-[45%] justify-between items-center">
            <section
              aria-label="hamburger-icon"
              data-testid="nav-icon"
              className="flex relative w-8 items-center h-6 cursor-pointer lg:invisible lg:opacity-0 lg:hidden md:justify-end"
              onClick={() => setMenuToggle(!menuToggle)}
              ref={navMenu}
            >
              <div
                className={`border-l-indigo-400 relative w-3 h-[.115rem] transition-[transform] duration-700 before:content-[''] hover:bg-[var(--pry-col)] before:hover:bg-[var(--pry-col)] after:hover:bg-[var(--pry-col)] before:block before:w-[1rem] before:h-[.11rem] before:transition-[rotate] before:duration-700 before:bg-black before:absolute after:content-[''] after:block after:w-[1rem] after:transition-[rotate] after:duration-700 after:h-[.115rem] after:bg-black ${
                  menuToggle
                    ? "bg-[transparent] hover:bg-transparent before:translate-y-0 before:-rotate-45 after:w-4 after:translate-y-0 after:rotate-45"
                    : "bg-black before:-translate-y-[5px] after:translate-y-[5px] hover:bg-[transparent]"
                }`}
              ></div>
            </section>
            <section>
              <div>{Logo}</div>
            </section>
            <section
              aria-label="hamburger-icon"
              data-testid="nav-icon"
              className="flex items-center justify-end"
            >
              <div>{modal}</div>
              <Link
                data-testid="cart-link"
                className="relative flex justify-center items-center cursor-pointer ml-2"
                to={"/cart"}
              >
                <div>{cartIcon}</div>
                <div className="absolute -right-[5px] -top-[3px] bg-[var(--black)] text-[var(--white)] w-5 h-5 flex justify-center items-center rounded-[50%] hover:bg-[var(--pry-col)]">
                  <p className="text-[var(--white)]">
                    {total}
                  </p>
                </div>
              </Link>
            </section>
          </section>
        </div>
      </Suspense>
    </>
  );
}
export default NavMenu;
