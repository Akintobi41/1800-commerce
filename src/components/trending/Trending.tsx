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
        data-testid="trending-images"
        className="flex justify-center gap-4 my-4" // Add spacing between icons
      >
        <JordanIcon aria-label="Jordan" title="Jordan" />
        <JdSportsIcon
          aria-label="JD Sports"
          title="JD Sports"
        />
        <PumaIcon aria-label="Puma" title="Puma" />
      </div>
    </section>
  );
};

export default Trending;
