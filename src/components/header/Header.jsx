/* eslint-disable react/prop-types */
function Header({ Navbar}) {

  return (
    <h2 className="fixed z-20 w-full bg-[var(--white)]">  
      {Navbar}
    </h2>
  );
  
}

export default Header;
