/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Logo = ({font = 'text-[3rem]'}) => {
  return (
    <Link to={"/"} className={`${font} font-bold block text-center -tracking-[5px] no-underline w-full`}>
      1800Store
    </Link>
  );
};

export default Logo;
