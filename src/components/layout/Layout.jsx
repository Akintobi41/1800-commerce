/* eslint-disable react/prop-types */
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HeaderText from "../headerText/HeaderText";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import Scroll from "../scrollToTop/Scroll";
import LayoutRoutes from './../layoutRoutes/LayoutRoutes';

function Layout() {
  console.log('layout')
  return (
    <>
    <Scroll />
    <main className="flex flex-col relative h-full min-h-screen my-0 w-full overflow-hidden">
      <section className="relative">
        <Header Navbar={<Navbar Logo={<Logo font_style={'md:ml-10 text-[3rem] text-center'} />} />} Text={<HeaderText/>} />
        <LayoutRoutes/>
        <Footer />
        <Logo font_style={"text-[22vw] text-center"} />
      </section>
    </main>
  </>
  )
}  

export default Layout
