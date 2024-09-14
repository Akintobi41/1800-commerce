/* eslint-disable react/prop-types */
import Navbar from "@components/navbar/Navbar";

function Header() {

  return (
    <h2 data-testid= 'header' className="fixed z-20 w-full bg-[var(--white)]">  
      <Navbar />
    </h2>
  );
  
}

export default Header;
