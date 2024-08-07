import CustomerService from "../customerService/CustomerService";
import Social from "../social/Social";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col px-4 border-t-[2px] mt-8 pb-2 my-0 mx-auto max-w-[1500px] bottom-0">
        <CustomerService />
        <Social />
      </footer>
    </>
  );
};

export default Footer;
