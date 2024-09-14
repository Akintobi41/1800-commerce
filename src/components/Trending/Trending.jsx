import JdSportsIcon from "@icons/JdSportsIcon";
import JordanIcon from "@icons/JordanIcon";
import PumaIcon from "@icons/PumaIcon";
import Heading from "@components/heading/Heading";

const Trending = () => {
  return (
    <>
      <section className="flex flex-col bg-[var(--white)] px-4">
        <Heading>2024 Trending Brands </Heading>
        <div data-testid="trending-images">
          <JordanIcon />
          <JdSportsIcon />
          <PumaIcon />
        </div>
      </section>
    </>
  );
};

export default Trending;
