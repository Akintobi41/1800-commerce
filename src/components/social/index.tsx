import FacebookIcon from "@assets/icons/FacebookIcon";
import InstagramIcon from "@assets/icons/InstagramIcon";
import PinterestIcon from "@assets/icons/PinterestIcon";
import TiktokIcon from "@assets/icons/TiktokIcon";
import React, { FC } from "react";

const Social: FC = () => {
  const socialIcons = [
    { name: "facebook", icon: <FacebookIcon />},
    { name: "instagram", icon: <InstagramIcon />},
    { name: "pinterest", icon: <PinterestIcon/> },
    { name: "tiktok", icon: <TiktokIcon />},
  ];

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="flex justify-between items-center w-[10rem]">
        {socialIcons.map(({ name, icon }) => (
          <div key={name} aria-label={name} title={name} className='size-[25px]'>
            {icon}
          </div>
        ))}
      </div>
      <div className="font-normal mt-2">
        © {year} 1800 Stores Ltd.{" "}
        <span className="italic">All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Social;
