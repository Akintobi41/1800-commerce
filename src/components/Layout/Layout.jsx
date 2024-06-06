/* eslint-disable react/prop-types */
import Footer from "../footer/Footer";
import HeaderText from "../headerText/HeaderText";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";
import Logo from "../logo/Logo";
import Scroll from "../scrollToTop/Scroll";

const Layout = ({
  children
}) => {
  console.log('rerender')

  return (
    <>
      <main className='flex flex-col relative min-h-screen my-0 mx-auto bg-[var(--grey)] overflow-hidden w-full'>
        <section className="absolute top-0 left-0 bottom-3 -right-[18px] overflow-x-hidden overflow-y-scroll">
      <HeaderText />
          <Navbar Logo={<Logo/>}/>
          
          <section className='flex flex-col'>
      <Scroll/>
        <Outlet />
      </section>
        <Footer Logo={<Logo font={'text-[5.2em]'}/>} />
      </section>
    </main>
    </>
   
  );
};
export default Layout;
