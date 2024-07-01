/* eslint-disable react/prop-types */

function Header({  Navbar, Text}) {

  return (
    <header className="sticky top-0 z-20 w-full h-24">
      {Text}
      {Navbar}
    </header>
  );
  
}

export default Header;
