/* eslint-disable react/prop-types */
import s from "./s_Layout.module.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import HeaderText from "../headerText/HeaderText";

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
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
