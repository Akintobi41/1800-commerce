/* eslint-disable react/prop-types */
import NavMenu from "./NavMenu";
import OpenAccountModal from "../openAccountModal/OpenAccountModal";

const Navbar = ({ Logo,Text }) => {
  return (
    <>
      {Text}
       <section className="flex items-end relative bg-[var(--white)] px-4 md:pl-0 h-[6rem] max-w-[1500px] mx-auto">
      <>
        <NavMenu Logo={Logo} modal={<OpenAccountModal />}  />
      </>
    </section>
    </>
   
  );
};

export default Navbar;
