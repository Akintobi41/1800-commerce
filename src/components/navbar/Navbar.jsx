/* eslint-disable react/prop-types */
import NavMenu from "./NavMenu";
import OpenAccountModal from "../openAccountModal/OpenAccountModal";

const Navbar = ({ Logo }) => {
  return (
    <section className="flex relative bg-[var(--white)] p-4 md:pl-0 h-16 border-t-[1px] max-w-[1500px] mx-auto">
      <>
        <NavMenu Logo={Logo} modal={<OpenAccountModal />} />
      </>
    </section>
  );
};

export default Navbar;
