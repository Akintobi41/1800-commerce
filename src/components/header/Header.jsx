/* eslint-disable react/prop-types */

function Header({ Navbar, Text}) {

  return (
    <header className="fixed -top-1 z-20 w-full h-24">  
      {/* why was the header changed from sticky to fixed */}
      {Text}
      {Navbar}
    </header>
  );
  
}

export default Header;
