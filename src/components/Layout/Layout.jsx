import s from "./s_Layout.module.css";
import Navbar from "../navbar/Navbar";
import Slider from "../slider/Slider";
import Products from "../products/Products";
import Trending from "../trending/Trending";
import About from "../about/About";

const Layout = () => {
  return (
    <main className={s.main}>
      <section className={s["main-container"]}>
        <p className={s.free}>
          Free express shipping over &#8358;100000*
        </p>
        <header className={s.header}>
          <Navbar />
        </header>
        <Slider />
        <Products />
        <Trending />
        <About />
      </section>
    </main>
  );
};

export default Layout;
