import React from "react";
import bgImage1 from "@images/bg-3.jpg";
import bgImage2 from "@images/bg-female.jpg";

interface ShowcaseItem {
  id: number;
  name: string;
  img: string; 
}

const ShowcaseSection: React.FC = () => {
  const items: ShowcaseItem[] = [
    {
      id: 1,
      name: "Caps",
      img: bgImage1,
    },
    {
      id: 2,
      name: "Bags",
      img: bgImage2,
    },
  ];

  return (
    <>
      <p className="text-[33px] px-4 text-center font-medium mb-8">
        Doing Things look good on you.
      </p>
      <section className="mx-4 h-full flex gap-y-4 flex-col lg:flex-row lg:justify-between">
        {items.map((item) => (
          <section
            data-testid="showcase-images"
            key={item.id}
            className={`h-[20rem] md:h-[24rem] lg:h-[30rem] lg:w-[48%] bg-center bg-no-repeat bg-gray-400`}
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          ></section>
        ))}
      </section>
    </>
  );
};

export default ShowcaseSection;
