/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CartIcon from "../../assets/Icons/CartIcon";
import { showEntry } from "../../store/accountSlice";
import SignOutBtn from "../signOutBtn/SignOutBtn";
import Input from './../reusables/input/Input';
import { navList } from "./navList";


function NavMenu({ Logo, modal }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const navMenu = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.status)
  const { name } = useSelector((state) => state.auth?.userData) || {};
  const cart = useSelector(
    (state) => state.cart.products
  );
  const total = cart.map((item) => item.quantity).reduce((first, second) => first + second, 0)
  const menu = ["menuToggle", "p", "cart-section"];
  const dispatch = useDispatch();
  
  useEffect(() => {
    menuToggle
      ? document
          .querySelector("body").style.overflowY = 'hidden'
      : document
          .querySelector("body").style.overflowY = 'auto'
  }, [menuToggle]);

  useEffect(() => {
    setMenuToggle(false);
  }, [pathname]);

 
  return (
    <section className='flex w-full justify-between'>
      <nav
        className={`${
          menuToggle
            ? "flex flex-col fixed left-0 items-start z-10 transition-all duration-[.5s] w-full h-full top-[5.8rem] bg-[var(--pry-col)] lg:w-0 lg:h-0"
            : "hidden lg:flex flex-col lg:relative fixed left-0 items-start w-full h-full lg:bg-transparent lg:h-0 lg:translate-y-[0px] transition-all duration-[1s] lg:w-auto"   //i removed z-10 from here , added it back and remove display of flex instead
        }`}
      >
        {loggedIn && <p className="p-4 italic lg:hidden">Hi, { name}</p>}
        <ul className="flex flex-col mt-10 w-full lg:mt-0 lg:h-0 lg:w-[30%] lg:flex-row  z-30 lg:gap-8">
          {Object.keys(navList).map((list, i) => (
            <section
              key={list}
              className={`flex w-full decoration-[none] text-[1.5rem] font-medium list-none ${i > 0 &&  i < 4 ? '' : 'lg:hidden'} cursor-pointer py-2 px-4 decoration-none border-b border-solid border-[#061A40] lg:text-[1.2rem] lg:border-0 lg:p-0 lg:ml-[1rem] hover:bg-[var(--black)] hover:text-[var(--white)] lg:hover:text-[var(--pry-col)] ${
                i === 4 && "mt-20"
              } ${i >= 4 && loggedIn ? 'hidden' : ''}`}
              onClick={() => {
                if (i < 4) navigate(`/${navList[list]}`);
                else { 
                  setMenuToggle(false);
                  dispatch(showEntry(i)) // open modal with either sign in or sign up
                }
              }}
            >
              {list}
            </section>
          ))}
          {loggedIn && <SignOutBtn className='lg:hidden'/>}
        </ul>
        
      </nav>
      <section className="flex w-full lg:w-[60%] justify-between items-center">
        {menu.map((section, i) => (
          <React.Fragment key={section}>
            {section === "p" ? (
              <> {Logo} </>
            ) : (
              <section
                key={section}
                className={
                  !i
                    ? "flex relative w-8 items-center h-6 cursor-pointer lg:invisible lg:opacity-0 lg:hidden md:justify-end"
                    : "flex items-center justify-end"
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
                    className={` border-l-indigo-400  relative w-4 h-[.115rem] transition-[transform] duration-700 before:content-[''] hover:bg-[var(--pry-col)] before:hover:bg-[var(--pry-col)] after:hover:bg-[var(--pry-col)] before:block before:w-[.7rem] before:h-[.11rem] before:transition-[rotate] before:duration-700 before:bg-black  before:absolute after:content-[''] after:block after:w-[.7rem] after:transition-[rotate] after:duration-700 after:h-[.115rem] after:bg-black ${
                      menuToggle
                        ? "bg-[transparent] hover:bg-transparent before:translate-y-0 before:-rotate-45 after:w-4 after:translate-y-0 after:rotate-45"
                        : "bg-black  before:-translate-y-[5px] after:translate-y-[5px] hover:bg-[transparent]"
                    }`}
                  ></section>
                ) : (
                  <>
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

     
    </section>
  );
}
export default NavMenu;
