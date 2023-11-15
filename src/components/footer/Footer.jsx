import s from "./s_Footer.module.css";
import CustomerService from "../customerService/CustomerService";
import Social from "../social/Social";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <CustomerService />
      <Social />
    </footer>
  );
};

export default Footer;
