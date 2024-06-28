import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AccountIcon from "../../assets/Icons/AccountIcon";
import { useOverflow } from "../../contexts";
import { navList } from "../navbar/navList";

function OpenAccountModal() {
  const { overflow, setOverflow } = useOverflow();  
  //   console.log(overflow, "b"); rerendering issues
  
  const navMenu = useRef()

  useEffect(() => { 
      document.addEventListener("mousedown", clearMenu);
      return () => {
        document.removeEventListener("mousedown", clearMenu);
      };
  }, [overflow])
  
  function clearMenu(e) { 
      if (
        overflow &&
        !navMenu.current?.contains(e.target)
      ) {
        setOverflow(false);
      }
  }

  return (
    <>
      <AccountIcon
        styles={"hidden md:block ml-4 mr-2"}
        onClick={() => setOverflow(!overflow)}
        refs={navMenu}
      />
      <div
        className={`${
          overflow
            ? "opacity-100 transition-opacity duration-300 visible"
            : "opacity-0 transition-opacity duration-300 invisible"
        } flex flex-col absolute top-[61px] bg-[var(--white)] right-[50px] w-[135px] h-[135px] p-6 `}
      >
        <p className="opacity-40">Account</p>
        {Object.keys(navList).map((item, i) => (
          <Link
            key={item}
            to={`/${navList[item]}`}
            className={`${i > 3 ? "" : "hidden"} mt-2`}
          >
            {" "}
            {i > 3 ? item : ""}
          </Link>
        ))}
      </div>
    </>
  );
}
export default OpenAccountModal;
