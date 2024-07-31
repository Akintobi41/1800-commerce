import { useEffect, useRef } from "react";
import AccountIcon from "../../assets/Icons/AccountIcon";
import { useOverflow } from "../../contexts";
import { navList } from "../navbar/navList";
import { useDispatch } from 'react-redux';
import { showEntry } from "../../store/accountSlice";
import { useSelector } from "react-redux";
import SignOutBtn from './../signOutBtn/SignOutBtn';

function OpenAccountModal() {
  const { overflow, setOverflow} =
    useOverflow();
  const navMenu = useRef();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth?.userData) || {};
  const loggedIn = useSelector((state) => state.auth.status)



  useEffect(() => {
    document.addEventListener("mousedown", clearMenu);
    return () => {
      document.removeEventListener("mousedown", clearMenu);
    };
  }, [overflow]);

  function clearMenu(e) {
    if (
      overflow &&
      navMenu.current &&
      !navMenu.current?.contains(e.target)
    ) {
      setOverflow(false);
    } 
  }

  return (
    <div ref={navMenu}>
      <div className="flex items-center justify-center"> {loggedIn ? <p className="ml-2 text-[.75rem] font-medium hidden lg:block">Hi,{name}</p> : null}<AccountIcon
        styles={`hidden md:block ml-4 lg:mx-0 mr-2 ${!loggedIn ? '' : null}`}
        onClick={() => setOverflow(!overflow)}
      /></div>
      
      <div
        className={`${
          overflow
            ? "opacity-100 transition-opacity duration-300 visible"
            : "opacity-0 transition-opacity duration-300 invisible"
        } flex flex-col absolute top-[61px] bg-[var(--white)] right-[50px] w-[135px] h-[135px] p-6 `}
      >
        <p className="opacity-40">Account</p>
        {!loggedIn ? Object.keys(navList).map((item, i) => (
          <section
            key={item}
            className={`cursor-pointer w-[63%] ${
              i > 3 ? "" : "hidden"
            } mt-2`}
            onClick={() => {
              dispatch(showEntry(i))
              console.log("onclick");
            }}
          >
            {" "}
            {i > 3 ? item : ""}
          </section>
        )) :  <SignOutBtn/>}
      </div>
    </div>
  );
}
export default OpenAccountModal;
