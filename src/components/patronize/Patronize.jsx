import s from "./s_Patronize.module.css";
import "/styles/sharedStyles.css";
import Details from "../patronizeDetails/Details";
import { accordionContent } from "./u_Patronize";
import { useState } from "react";

const Patronize = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={s["patronize-container"]}>
      <h2 className={`shared-h2 ${s.h2}`}>
        Why You Should Patronize Us
      </h2>
      {accordionContent.map((el) => (
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

export default Patronize;
