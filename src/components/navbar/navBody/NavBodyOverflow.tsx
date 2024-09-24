import { useEffect } from "react";
import { useLocation } from "react-router";

function NavBodyOverflow({ menuToggle, setMenuToggle }) {
  const pathname = useLocation();

  useEffect(() => {
    menuToggle
      ? (document.querySelector("body").style.position =
          "fixed")
      : (document.querySelector("body").style.position =
          "relative");
  }, [menuToggle]);

  useEffect(() => {
    setMenuToggle(false);
  }, [pathname]);
  return null;
}
export default NavBodyOverflow;
