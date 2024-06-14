/* eslint-disable react/prop-types */

function Header({ HeaderText, Navbar }) {

  return (
    <header className="fixed top-0 h-24 z-10 w-full">
      {HeaderText}
      {Navbar}
    </header>
  );
  
}

export default Header;
