import { useState } from "react";
import Details from "../patronizeDetails/Details";
import { accordionContent } from "./u_Patronize";

const Patronize = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='flex flex-col justify-center bg-[var(--white)] p-6 m-6 text-center'>
      <h2 className='mb-4 font-medium text-[1.5rem]'>
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
