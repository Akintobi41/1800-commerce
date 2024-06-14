import CustomerService from "../customerService/CustomerService";
import Social from "../social/Social";

const Footer = ({ Logo }) => {
  return (
    <>
      <footer className="flex flex-col px-6 pt-6 pb-2 my-0 mx-auto max-w-[1500px] bottom-0">
        <CustomerService />
        <Social />
        {Logo}
      </footer>
    </>
  );
};

export default Footer;
