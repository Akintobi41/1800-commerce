/* eslint-disable react/prop-types */

function Header({ Navbar, Text}) {

  return (
    <h2 className="fixed -top-1 z-20 w-full h-24">  
      {Text}
      {Navbar}
    </h2>
  );
  
}

export default Header;
