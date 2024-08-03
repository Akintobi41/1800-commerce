/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HeaderText from "../headerText/HeaderText";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import Scroll from "../scrollToTop/Scroll";
import Entry from "../entry/Entry";

function Layout() {

  return (
    <>
    <Scroll />
    <main className="flex flex-col relative h-full min-h-screen my-0 w-full overflow-hidden">
      <section className="relative">
        <Header Navbar={<Navbar Logo={<Logo font_style={'md:ml-10 text-[3rem] text-center'} />} />} Text={<HeaderText/>} />
        <section className="flex flex-col relative">
          <Entry/>
          <Outlet />
        </section>
        <Footer />
        <Logo font_style={"text-[22vw] text-center"} />
      </section>
    </main>
  </>
  )
}  

export default Layout
