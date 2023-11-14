/* eslint-disable react/prop-types */
import s from "./s_Layout.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({
  children,
  menuToggle,
  setMenuToggle,
}) => {
  return (
    <main className={s.main}>
      <section className={s["main-container"]}>
        <p className={s.free}>
          Free express shipping over &#8358;100000*
        </p>
        <header className={s.header}>
          <Navbar
            menuToggle={menuToggle}
            setMenuToggle={setMenuToggle}
          />
        </header>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
