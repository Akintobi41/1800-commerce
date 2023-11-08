import s from "./s_Footer.module.css";
import ReachOut from "../reachOut/ReachOut";
import CustomerService from "../customerService/CustomerService";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <ReachOut />
      <CustomerService />
    </footer>
  );
};

export default Footer;
