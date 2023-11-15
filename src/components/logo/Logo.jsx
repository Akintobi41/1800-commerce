import s from "./s_Logo.module.css";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to={"/"} className={s.logo}>
      1800Store
    </Link>
  );
};

export default Logo;
