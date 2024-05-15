/* eslint-disable react/prop-types */
import Footer from "../footer/Footer";
import HeaderText from "../headerText/HeaderText";
import Navbar from "../navbar/Navbar";
import s from "./s_Layout.module.css";

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
