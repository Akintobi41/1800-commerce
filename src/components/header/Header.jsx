/* eslint-disable react/prop-types */

function Header({ HeaderText, Navbar }) {

  return (
    <header className="sticky top-0 z-20 w-full">
      {/* {HeaderText} */}
      {Navbar}
    </header>
  );
  
}

export default Header;
