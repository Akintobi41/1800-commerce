import React, { Fragment } from "react";
import s from "./s_Social.module.css";
import FacebookIcon from "../../assets/Icons/FacebookIcon";
import InstagramIcon from "../../assets/Icons/InstagramIcon";

const Social = () => {
  const socialIcon = [
    {
      name: "facebook",
      icon: <FacebookIcon />,
    },
    {
      name: "instagram",
      icon: <InstagramIcon />,
    },
    {
      name: "twitter",
      icon: <FacebookIcon />,
    },
    {
      name: "tiktok",
      icon: <FacebookIcon />,
    },
  ];
  const footerSection = ["section1", "section2"];
  const year = new Date().getFullYear();

  return (
    <section className={s["social-container"]}>
      <section>
        {footerSection.map((section, i) => (
          <React.Fragment key={section}>
            {i === 0 ? (
              <section>
                {socialIcon.map((i) => (
                  // <img
                  //   src={img.img}
                  //   alt={img.alt}
                  //   key={img.alt}
                  //   className={s.img}
                  // />
                  <Fragment key={i.name}>{i.icon}</Fragment>
                ))}
              </section>
            ) : (
              <section className={s["link-copyright"]}>
                © {year} 1800 Stores Ltd. All Rights
                Reserved
              </section>
            )}
          </React.Fragment>
        ))}
        {/* {socialImg.map((img) => (
          <img src={img.img} alt={img.alt} key={img.alt} />
        ))} */}
      </section>
      {/* <section className={s["link-copyright"]}>
        © 2023 1800 Stores Ltd. All Rights Reserved
      </section> */}
    </section>
  );
};

export default Social;
