/* eslint-disable react/prop-types */
import OpenAccountModal from "../openAccountModal/OpenAccountModal";
import CartIcon from './../../assets/Icons/CartIcon';
import NavMenu from "./navMenu/NavMenu";

const Navbar = ({ Logo, Text }) => {
  return (
    <>
      {Text}
      <section className="flex items-end relative bg-[var(--white)] px-4 md:pl-0 h-[6rem] max-w-[1500px] mx-auto">
          <NavMenu
            Logo={Logo}
            modal={<OpenAccountModal />}
            cartIcon={<CartIcon />}
          />
        </section>
    </>
  );
};

export default Navbar;
