import Details from "@components/details";
import Heading from "@components/heading";
import { accordionContent } from "@utils/constants";
import { FC, useState } from "react";
const Patronize: FC = () => {
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);

  return (
    <section data-testid="patronize-section" className="w-full flex flex-col justify-center bg-[var(--white)] px-4 text-center max-w-[700px] mx-auto">
      <Heading> Why You Should Patronize Us </Heading>
      {accordionContent.map((el) => (
        <Details
          key={el.title}
          el={el}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </section>
  );
};

export default Patronize;
