import JdSportsIcon from "../../assets/Icons/JdSportsIcon";
import JordanIcon from "../../assets/Icons/JordanIcon";
import PumaIcon from "../../assets/Icons/PumaIcon";
import Heading from "../heading/Heading";

const Trending = () => {
  
  return (
    <>
      <section className='flex flex-col bg-[var(--white)] px-4'>
        <Heading>2023 Trending Brands </Heading>
        <div data-testid='trending-images'>
        <JordanIcon />
      <JdSportsIcon />
      <PumaIcon /> 
     </div>
      
    </section>
    </>
  
  );
};

export default Trending;
