import s from "./s_Footer.module.css";
import ReachOut from "../reachOut/ReachOut";
import CustomerService from "../customerService/CustomerService";
import Social from "../social/Social";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <ReachOut />
      <CustomerService />
      <Social />
    </footer>
  );
};

export default Footer;
