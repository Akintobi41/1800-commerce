import { useEffect } from "react";
import { useLocation } from "react-router";

function NavBodyOverflow({ menuToggle, setMenuToggle }) {
  const pathname = useLocation();

  useEffect(() => {
    menuToggle
      ? (document.querySelector("body").style.overflowY =
          "hidden")
      : (document.querySelector("body").style.overflowY =
          "auto");
  }, [menuToggle]);

  useEffect(() => {
    setMenuToggle(false);
  }, [pathname]);
  return null;
}
export default NavBodyOverflow;
