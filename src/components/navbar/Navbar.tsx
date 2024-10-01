import HeaderText from "@components/headerText";
import NavMenu from "./navMenu/NavMenu";

const Navbar = () => {
  return (
    <>
      <HeaderText />
      <section className="flex items-end relative bg-[var(--white)] px-4 h-[6rem] min-[1500px]:px-0 max-w-[1500px] mx-auto">
        <NavMenu />
      </section>
    </>
  );
};

export default Navbar;
