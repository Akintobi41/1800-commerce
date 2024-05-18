/* eslint-disable react-hooks/exhaustive-deps */
import s from "./s_Faqs.module.css";
import "/styles/sharedStyles.css";
import { faqContent } from "./u_Faqs";
import { MyContext } from "../../../contexts/MyContext";
import { useState, useContext } from "react";
import useResetSearchAndMenu from "../../../hooks/useResetSearchAndMenu";
import Details from "./../../patronizeDetails/Details";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setSearch, setMenuToggle } =
    useContext(MyContext);
  useResetSearchAndMenu(setSearch, setMenuToggle);

  return (
    <section className={s["faq-container"]}>
      <h3 className={s.h3}>Frequently Asked Questions</h3>
      {faqContent.map((el) => (
        <Details
          key={el.title}
          el={el}
          activeIndex={activeIndex === el.id}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </section>
  );
};

export default Faqs;
