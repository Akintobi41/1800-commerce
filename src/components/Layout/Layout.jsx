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
    <>
      <Scroll />
      <main className="flex flex-col relative h-full min-h-screen my-0 mx-auto bg-[var(--grey)] w-full">
        <section className="">
          <HeaderText/>
          <Header
            HeaderText={<HeaderText />}
            Navbar={<Navbar Logo={<Logo />} />}
          />
          <section className="flex flex-col">
            <Outlet />
          </section>
          <Footer />
          <Logo font_style={"text-[22vw] text-center"} />
        </section>
      </main>
    </>
  );
};
export default Layout;
