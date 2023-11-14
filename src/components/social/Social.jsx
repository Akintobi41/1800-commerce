import React from "react";
import s from "./s_Social.module.css";
const Social = () => {
  const socialImg = [
    {
      img: "/Images/icons8-facebook.svg",
      alt: "facebook-link",
    },
    {
      img: "/Images/icons8-instagram.svg",
      alt: "instagram-link",
    },
    {
      img: "/Images/icons8-instagram.svg",
      alt: "instagram-link;,/",
    },
    {
      img: "/Images/icons8-instagram.svg",
      alt: "instagram-linknl",
    },
  ];
  const footerSection = ["section1", "section2"];

  return (
    <section className={s["social-container"]}>
      <section>
        {footerSection.map((section, i) => (
          <React.Fragment key={section}>
            {i === 0 ? (
              <section>
                {socialImg.map((img) => (
                  <img
                    src={img.img}
                    alt={img.alt}
                    key={img.alt}
                    className={s.img}
                  />
                ))}
              </section>
            ) : (
              <section className={s["link-copyright"]}>
                © 2023 1800 Stores Ltd. All Rights Reserved
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
