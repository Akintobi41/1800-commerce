/* eslint-disable react-hooks/exhaustive-deps */
import Details from "@components/details/Details";
import { useState } from "react";
import { faqContent } from "./u_Faqs";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      data-testid="faqs"
      className="w-full bg-[var(--white)] m-6 p-6 flex flex-col gap-[.2rem] mt-24 max-w-[700px] mx-auto"
    >
      <h3 className="text-center mb-8 font-bold text-[25px]">
        Frequently Asked Questions
      </h3>
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
