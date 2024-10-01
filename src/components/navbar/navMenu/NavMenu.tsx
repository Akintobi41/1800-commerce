import CartIcon from "@assets/icons/CartIcon";
import Logo from "@components/logo";
import NavBodyOverflow from "@components/navbar/navBody/NavBodyOverflow";
import TopNav from "@components/navbar/topNav/TopNav";
import OpenAccountModal from "@components/openAccountModal/OpenAccountModal";
import { useAppSelector } from "@hooks/useAppStore";
import { CartItem } from "@src/tsTypes/react-types";
import { cartData } from "@store/cartSlice";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavSection from "../navSection/NavSection";

function NavMenu() {
  const [menuToggle, setMenuToggle] = useState(false);
  const navMenu = useRef(null);
  const cart: CartItem[] = useAppSelector(cartData);
  const total = cart
    .map((item) => item.quantity)
    .reduce((first, second) => first + second, 0);

  return (
    <>
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
        <section className="flex w-full lg:w-[58%] justify-between items-center">
          <section
            aria-label="hamburger-icon"
            data-testid="nav-icon"
            className="flex relative w-8 mt-2 items-center h-6 cursor-pointer lg:invisible lg:opacity-0 lg:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
            ref={navMenu}
          >
            <div
              className={`border-l-indigo-400 relative w-5 h-[.18rem] transition-[transform] duration-700 before:content-[''] hover:bg-[var(--pry-col)] before:hover:bg-[var(--pry-col)] after:hover:bg-[var(--pry-col)] before:block before:w-[1.5rem] before:h-[.18rem] before:transition-[rotate] before:duration-700 before:bg-black before:absolute after:content-[''] after:block after:w-[1.5rem] after:transition-[rotate] after:duration-700 after:h-[.18rem] after:bg-black ${
                menuToggle
                  ? "bg-[transparent] hover:bg-transparent before:translate-y-0 before:-rotate-45 after:w-4 after:translate-y-0 after:rotate-45"
                  : "bg-black before:-translate-y-[5px] after:translate-y-[5px] hover:bg-[transparent]"
              }`}
            ></div>
          </section>
          <section>
            <Logo />
          </section>
          <section
            aria-label="hamburger-icon"
            data-testid="nav-icon"
            className="flex items-center justify-end"
          >
            <div>
              <OpenAccountModal />{" "}
            </div>
            <Link
              data-testid="cart-link"
              className="relative flex justify-center items-center cursor-pointer ml-2"
              to={"/cart"}
            >
              <div>
                <CartIcon />
              </div>
              <div className="absolute -right-[5px] -top-[3px] bg-[var(--black)] text-[var(--white)] w-5 h-5 flex justify-center items-center rounded-[50%] hover:bg-[var(--pry-col)]">
                <p
                  data-testid="total"
                  className="text-[var(--white)]"
                >
                  {total}
                </p>
              </div>
            </Link>
          </section>
        </section>
      </div>
    </>
  );
}
export default NavMenu;
