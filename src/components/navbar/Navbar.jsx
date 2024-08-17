/* eslint-disable react/prop-types */
import { lazy } from "react";
import NavMenu from "./navMenu/NavMenu";
const CartIcon = lazy(() =>
  import("./../../assets/Icons/CartIcon")
);
const OpenAccountModal = lazy(() =>
  import("../openAccountModal/OpenAccountModal")
);

const Navbar = ({ Logo, Text }) => {
  return (
    <>
      {Text}
      <section className="flex items-end relative bg-[var(--white)] px-4 md:pl-0 h-[6rem] max-w-[1500px] mx-auto">
        <>
          <NavMenu
            Logo={Logo}
            modal={<OpenAccountModal />}
            cartIcon={<CartIcon />}
          />
        </>
      </section>
    </>
  );
};

export default Navbar;
