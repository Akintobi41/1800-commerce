/* eslint-disable react/prop-types */
import Footer from "../footer/Footer";
import HeaderText from "../headerText/HeaderText";
import Navbar from "../navbar/Navbar";
import s from "./s_Layout.module.css";
import { Outlet } from "react-router";

const Layout = ({
  children,
  menuToggle,
  setMenuToggle,
}) => {
  return (
    <main className={s.main}>
      <HeaderText />
      <Navbar
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
      />
      <section className={s["main-container"]}>
        {/* {children} */}
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
