/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CartIcon from "../../assets/Icons/CartIcon";
import { useOverflow } from "../../contexts";
import Input from './../reusables/input/Input';
import { navList } from "./navList";


function NavMenu({ Logo, SearchIcon,modal }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const menu = ["menuToggle", "p", "cart-section"];
  const navMenu = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cart = useSelector(
    (state) => state.account.products
  );
  const total = cart.map((item) => item.quantity).reduce((first, second) => first + second, 0)
  const { account, setOverflow,setAccount } = useOverflow();

  // useEffect(() => {
  //   document.addEventListener("mousedown", clearMenu);
  //   console.log(menuToggle)
  //   menuToggle
  //     ? document
  //         .querySelector("section").style.overflowY = 'hidden'
  //     : document
  //         .querySelector("section").style.overflowY = 'clip'
  //   return () => {
  //     document.removeEventListener("mousedown", clearMenu);
  //   };
  // }, [menuToggle]);

  useEffect(() => {
    setMenuToggle(false);
  }, [pathname]);

  // function clearMenu(e) {
  //   if (
  //     menuToggle &&
  //     !Object.keys(navList).includes(e.target.textContent) &&
  //     !navMenu.current?.contains(e.target)
  //   ) {
  //     setMenuToggle(false);
  //   }
  // }
  
  return (
    <>
      <nav
        className={`${
          menuToggle
            ? "flex flex-col fixed left-0 items-start z-10 transition-all duration-[.5s] w-full h-full translate-y-[2.6rem] bg-[var(--pry-col)] lg:w-0 lg:h-0"
            : "flex flex-col fixed left-0 items-start z-10 w-full h-full lg:bg-transparent lg:h-40 translate-y-[-900px] lg:translate-y-[0px] transition-all duration-[1s] lg:w-auto"
        }`}
      >
        <ul className="flex flex-col mt-10 w-full lg:mt-0 lg:h-0 lg:w-[30%] lg:flex-row z-30 lg:gap-8">
          {Object.keys(navList).map((list, i) => (
            <section
              key={list}
              className={`flex w-full decoration-[none] text-[1.5rem] font-medium list-none ${i > 0 &&  i < 4 ? '' : 'lg:hidden'} cursor-pointer py-2 px-4 decoration-none border-b border-solid border-[#061A40] lg:text-[1.2rem] lg:border-b-0 lg:p-0 lg:ml-[1rem] hover:bg-[var(--black)] hover:text-[var(--white)] lg:hover:text-[var(--pry-col)] ${
                i === 4 && "mt-20"
              }`}
              onClick={() => {
                if (i < 4) navigate(`/${navList[list]}`);
                else { 
                  setMenuToggle(false);
                  setAccount({ state: true, id: i })  // open modal with either sign in or sign up
                }
                
              }}
            >
              {list}
            </section>
          ))}
        </ul>
      </nav>

      <section className="flex w-full lg:w-1/2 justify-between items-center lg:flex-[4.5]">
        {menu.map((section, i) => (
          <React.Fragment key={section}>
            {section === "p" ? (
              <> {Logo} </>
            ) : (
              <section
                key={section}
                className={
                  !i
                    ? "flex relative w-8 items-center h-6 cursor-pointer lg:invisible lg:opacity-0"
                    : "flex items-center lg:mr-[1.2rem] justify-end"
                }
                onClick={
                  !i
                    ? () => setMenuToggle(!menuToggle)
                    : null
                }
                ref={!i ? navMenu : null}
              >
                {!i ? ( // if index is equals to zero this is for the navigation menu
                  <section
                    className={` border-l-indigo-400 relative w-4 h-[.115rem] transition-[transform] duration-700 before:content-[''] hover:bg-[var(--pry-col)] before:hover:bg-[var(--pry-col)] after:hover:bg-[var(--pry-col)] before:block before:w-[.7rem] before:h-[.11rem] before:transition-[rotate] before:duration-700 before:bg-black  before:absolute after:content-[''] after:block after:w-[.7rem] after:transition-[rotate] after:duration-700 after:h-[.115rem] after:bg-black ${
                      menuToggle
                        ? "bg-[transparent] hover:bg-transparent before:translate-y-0 before:-rotate-45 after:w-4 after:translate-y-0 after:rotate-45"
                        : "bg-black  before:-translate-y-[5px] after:translate-y-[5px] hover:bg-[transparent]"
                    }`}
                  ></section>
                ) : (
                  <>
                        {SearchIcon}
                        {modal}
                        <Input name="search"
                          type="search"
                          styles={"hidden"} />
                    <Link
                      className="relative flex justify-center items-center cursor-pointer ml-2"
                      to={"/cart"}
                    >
                      <CartIcon />
                      <div className="absolute -right-[5px] -top-[3px] bg-[var(--black)] text-[var(--white)] w-5 h-5 flex justify-center items-center rounded-[50%] hover:bg-[var(--pry-col)]">
                        <p className="text-[var(--white)]">
                          {total}
                        </p>
                      </div>
                        </Link>{" "}
                  </>
                )}
              </section>
            )}
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
export default NavMenu;
