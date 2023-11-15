import s from "./s_Faqs.module.css";
import "/styles/sharedStyles.css";
import Details from "../../components/patronizeDetails/Details";
import { faqContent } from "./u_Faqs";
import { useState } from "react";
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
