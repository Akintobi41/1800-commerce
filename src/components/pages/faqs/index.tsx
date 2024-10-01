import Details from "@components/details";
import { faqContent } from "@utils/constants";
import { FC, useState } from "react";

interface Faq {
  id: number;
  title: string;
  text: string;
}

const Faqs: FC = () => {
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);

  return (
    <section
      data-testid="faqs"
      className="w-full bg-[var(--white)] m-6 p-6 flex flex-col gap-[.2rem] mt-24 max-w-[700px] mx-auto"
    >
      <h3 className="text-center mb-8 font-bold text-[25px]">
        Frequently Asked Questions
      </h3>
      {faqContent.map((el: Faq) => (
        <Details
          key={el.id}
          el={el}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </section>
  );
};
export default Faqs;
