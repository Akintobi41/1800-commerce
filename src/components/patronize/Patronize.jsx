import { useState } from "react";
import Heading from "../heading/Heading";
import Details from "../patronizeDetails/Details";
import { accordionContent } from "./u_Patronize";

const Patronize = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='flex flex-col justify-center bg-[var(--white)] px-4 text-center max-w-[700px] mx-auto'>
      <Heading className={'mb-3'}>  Why You Should Patronize Us </Heading>
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
