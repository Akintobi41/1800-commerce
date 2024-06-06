/* eslint-disable react-hooks/exhaustive-deps */
import { faqContent } from "./u_Faqs";
import { useState} from "react";
import Details from "./../../patronizeDetails/Details";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='bg-[var(--white)] m-6 p-6 flex flex-col gap-[.2rem]'>
      <h3 className='text-center mb-2'>Frequently Asked Questions</h3>
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
