import CustomerService from "../customerService/CustomerService";
import Logo from "../logo/Logo";
import Social from "../social/Social";
const Footer = () => {
  return (
    <>
      <hr className="section mt-6 w-[140%] ml-[-20%]" />
      <footer className=" w-full flex flex-col px-4 pb-2 my-0 min-[1500px]:mx-auto max-w-[1500px]">
        <CustomerService />
        <Social />
      </footer>
      <Logo
        font_style={
          "text-[7vh] sm:text-[10vh] md:text-[12vh] lg:text-[15vh] w-[100%] text-center"
        }
      />
    </>
  );
};

export default Footer;
