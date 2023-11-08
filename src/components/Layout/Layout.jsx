/* eslint-disable react/prop-types */
import s from "./s_Layout.module.css";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <main className={s.main}>
      <section className={s["main-container"]}>
        <p className={s.free}>
          Free express shipping over &#8358;100000*
        </p>
        <header className={s.header}>
          <Navbar />
        </header>
        {children}
      </section>
    </main>
  );
};

export default Layout;
