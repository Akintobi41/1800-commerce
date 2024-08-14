import JdSportsIcon from "../../assets/Icons/JdSportsIcon";
import JordanIcon from "../../assets/Icons/JordanIcon";
import PumaIcon from "../../assets/Icons/PumaIcon";
import Heading from "../heading/Heading";

const Trending = () => {
  
  return (
    <>
      <section className='flex flex-col bg-[var(--white)]'>
        <Heading>2023 Trending Brands </Heading>
      <JordanIcon />
      <JdSportsIcon />
      <PumaIcon />
    </section>
    </>
  
  );
};

export default Trending;
