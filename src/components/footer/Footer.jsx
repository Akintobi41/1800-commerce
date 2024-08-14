import CustomerService from "../customerService/CustomerService";
import Social from "../social/Social";
import Logo from "../logo/Logo";
const Footer = () => {
  return (
    <>
      <hr className="section mt-6 w-[140%] ml-[-20%]" />
      <footer className=" w-full flex flex-col px-4 pb-2 my-0 min-[1500px]:mx-auto max-w-[1500px]">
        <CustomerService />
        <Social />
        <Logo font_style={"text-[15rem] -mb-16 w-[100%] text-center"} />
      </footer>

    </>
  );
};

export default Footer;
