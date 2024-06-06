/* eslint-disable react/prop-types */
import React from 'react'
import { useState,useRef,useEffect } from 'react';
// import { MyContext } from '../../contexts/MyContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartIcon from '../../assets/Icons/CartIcon';
import { FocusOnGravity } from '@cloudinary/url-gen/qualifiers/gravity/focusOnGravity/FocusOnGravity';

function NavMenu({ Logo, SearchIcon}) {
  
  const [menuToggle,setMenuToggle] = useState(false);
  const navList = {
    Home: "",
    Products: "products",
    About: "about",
    Contact: "contact",
    "Sign In": "signin",
    "Sign Up": "signup",
  };
  const menu = ["menuToggle", "p", "cart-section"];
  const navMenu = useRef(null);
  const [cart, setCart] = useState(0);
  const { pathname } = useLocation()


  useEffect(() => {
    document.addEventListener("mousedown", clearMenu);
    

      menuToggle
        ? document
            .querySelector("body")
            .classList.add("overflow")
            : document
            .querySelector("body")
          .classList.remove("overflow");
    
    return () => { 
      document.removeEventListener('mousedown',clearMenu)
    }

  }, [menuToggle]);

  function clearMenu(e) { 
    if (
      ( menuToggle &&  (!(Object.keys(navList)).includes(e.target.text))) &&
       !navMenu.current?.contains(e.target)
     ) {
       setMenuToggle(false);
     }
  }

  useEffect(() => { 
    setMenuToggle(false)
  },[pathname])

  const navigate = useNavigate()

  function redirect(link) { 
    navigate(link)
  }

  return (


    <>
     <nav
    className={`${
      menuToggle
        ? "flex flex-col fixed left-0 items-start z-10 transition-all duration-[.5s] w-full h-full translate-y-[3rem] bg-[var(--pry-col)] lg:w-0 lg:h-0"
        : "flex flex-col fixed left-0 items-start z-10 w-full h-full bg-[var(--pry-col)] lg:w-0 lg:h-0 translate-y-[-900px] transition-all duration-[1s] "
    }`}
  >
    <ul className="flex flex-col mt-10 w-full lg:mt-0 lg:h-0 lg:w-1/2 lg:flex-row">
      {Object.keys(navList).map((list, i) => (
        <Link
          to={`/${navList[list]}`}
          key={list}
          className={`flex w-full decoration-[none] text-[1.5rem] font-medium list-none cursor-pointer py-2 px-4 decoration-none border-b border-solid border-[#061A40] lg:text-[1.2rem] lg:border-b-0 lg:p-0 lg:ml-[1.2rem] lg:hidden hover:bg-[var(--black)] hover:text-[var(--white)] ${
            i === 4 && "mt-20 lg:hidden"
            }`}
          onClick={() => { 
            redirect(`/${navList[list]}`)
          }}
        >
          {list}
        </Link>
      ))}
    </ul>
  </nav>


    <section className="flex w-full justify-between items-center lg:flex-[4.5]">
      {menu.map((section, i) => (
        <React.Fragment key={section}>
          {section === "p" ? (
            <> {Logo} </>
          ) : (
            <section
              key={section}
              className={!i ? 'flex relative w-8 items-center h-6 cursor-pointer lg:hidden' : 'flex items-center lg:mr-[1.2rem] justify-end'}
              onClick={
                !i ? () => setMenuToggle(!menuToggle) : null
              }
              ref={!i ? navMenu : null}
            >
              {!i ? ( // if index is equals to zero this is for the navigation menu
                <section
                  className={`relative w-4 h-[.115rem] transition duration-700 before:content-[''] before:block before:w-[.7rem] before:h-[.11rem] before:transition before:duration-700 before:bg-black  before:absolute after:content-[''] after:block after:w-[.7rem] after:transition after:duration-700 after:h-[.115rem] after:bg-black ${
                    menuToggle ? 'bg-[transparent] before:translate-y-0 before:-rotate-45 after:w-4 after:translate-y-0 after:rotate-45 ' : "bg-black  before:-translate-y-[5px] after:translate-y-[5px]"
                  }`}
                ></section>
              ) : (
                <>
                  {SearchIcon}
                  <input
                    name="search"
                    type="search"
                    className='hidden'
                  />
                  <Link
                    className='relative flex justify-center items-center cursor-pointer'
                    to={"/cart"}
                  >
                    <CartIcon/>
                    <div className='absolute -right-[5px] -top-[3px] bg-[var(--black)] text-[var(--white)] w-5 h-5 flex justify-center items-center rounded-[50%]'>
                      <p className='text-[var(--white)]'>
                        {cart}
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
  )
}
export default NavMenu