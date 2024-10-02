import JdSportsIcon from "@assets/icons/JdSportsIcon";
import JordanIcon from "@assets/icons/JordanIcon";
import PumaIcon from "@assets/icons/PumaIcon";
import Heading from "@components/heading";
import { FC } from "react";

const Trending: FC = () => {
  return (
    <section className="flex flex-col bg-[var(--white)] px-4">
      <header>
        <Heading>2024 Trending Brands</Heading>
      </header>
      <div
        data-testid="trending-section"
        className="flex justify-center gap-4 my-4" 
      >
        <JordanIcon aria-label="Jordan" />
        <JdSportsIcon
          aria-label="JD Sports"
        
        />
        <PumaIcon aria-label="Puma" />
      </div>
    </section>
  );
};

export default Trending;
