/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HeaderText from "../headerText/HeaderText";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import Scroll from "../scrollToTop/Scroll";

const Layout = () => {
  return (
    <main className="flex flex-col relative min-h-screen my-0 mx-auto bg-[var(--grey)] overflow-hidden w-full">
      <section className="absolute top-0 left-0 bottom-1 right-0 overflow-x-hidden overflow-y-scroll">
        <Header
          HeaderText={<HeaderText />}
          Navbar={<Navbar Logo={<Logo />} />}
        />
        <section className="flex flex-col mt-24">
          <Scroll />
          <Outlet />
        </section>
        <Footer Logo={""} />
        <Logo font_style={"text-[22vw] text-center"} />
      </section>
    </main>
  );
};
export default Layout;
