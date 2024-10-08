/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Logo = ({
  font_style = "text-[3rem] text-center",
}) => {
  
  return (
    <Link
      to={"/"}
      className={`${font_style} font-bold block -tracking-[5px] no-underline w-full `}
    >
      1800Store
    </Link>
  );
};

export default Logo;
