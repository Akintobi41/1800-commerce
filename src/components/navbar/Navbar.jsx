/* eslint-disable react/prop-types */
import s from "./s_Navbar.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import RenderNav from "./RenderNav";
import { MyContext } from "../../contexts/MyContext";

const Navbar = ({ menuToggle, setMenuToggle }) => {
  const { search, setSearch } = useContext(MyContext);

  const navList = {
    Home: "/",
    Products: "/products",
    About: "/about",
    Contact: "/contact",
    "Sign In": "/signin",
    "Sign Up": "/signup",
  };

  return (
    <header className={s.header}>
      <section
        className={`${s["show-search"]} ${
          search ? s["show-search-active"] : ""
        }`}
      >
        <input
          type="search"
          name="search"
          className={`${
            search ? s["open-search"] : s.searching
          }`}
          placeholder="SEARCH"
        />
        <img
          src="/Images/search-icon.svg"
          alt="search"
          className={`${s["search-icon-2"]} ${
            search ? s["show-icon-2"] : ""
          }`}
          onClick={() => setSearch(!search)}
        />
      </section>
      <nav
        className={`${
          menuToggle ? s["list-active"] : s["list-section"]
        }`}
      >
        <ul className={s.ul}>
          {Object.keys(navList).map((list, i) => (
            <Link
              to={`${navList[list]}`}
              key={list}
              className={`${s.list} ${
                i === 4 ? s["lower-list"] : ""
              }`}
            >
              {list}
            </Link>
          ))}
        </ul>
      </nav>
      <section className={s["toggle-section"]}>
        <RenderNav
          setMenuToggle={setMenuToggle}
          menuToggle={menuToggle}
          search={search}
          setSearch={setSearch}
        />
      </section>
    </header>
  );
};

export default Navbar;
