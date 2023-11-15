import s from "./s_ReachOut.module.css";
import { Link } from "react-router-dom";
import React from "react";

const textOptions = ["Happiness", "Guarantee"];
const btnOptions = ["Contact Us", "FAQ"];

const ReachOut = () => {
  return (
    <section className={s["reach-out-container"]}>
      <section>
        <section className={s["guarantee"]}>
          <img
            src="/Images/100-percent.svg"
            alt="100 percent"
            className={s.percent}
          />
          <section className={s["reach-out-section"]}>
            {textOptions.map((el) => (
              <p
                key={el}
                className={s[`${el.toLowerCase()}-text`]}
              >
                {el}
              </p>
            ))}
          </section>
        </section>
      </section>
      <p className={s["footer-customer-text"]}>
        The 1800 Customer Happiness Team is your go-to when
        you need a recommendation, a refund, or just a
        reason to smile. Seriously, reach out. Even just to
        say hi.
      </p>
      <section className={s["reach-out-btn-section"]}>
        {btnOptions.map((btn) => (
          <React.Fragment key={btn}>
            <Link
              to={`${
                btn.endsWith("Us")
                  ? "contact"
                  : btn.toLowerCase() + "s"
              }  `}
              key={btn}
            >
              <button className={s["reach-out-btn"]}>
                {btn}
              </button>
            </Link>
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};

export default ReachOut;
