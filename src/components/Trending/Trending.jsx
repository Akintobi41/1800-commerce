import JordanIcon from "../../assets/Icons/JordanIcon";
import JdSportsIcon from "../../assets/Icons/JdSportsIcon";
import PumaIcon from "../../assets/Icons/PumaIcon";

const Trending = () => {
  
  return (
    <section className='flex flex-col m-6 p-4 bg-[var(--white)]'>
      <h2 className="text-center text-[1.5rem] font-medium">2023 Trending Brands</h2>
      <JordanIcon />
      <JdSportsIcon />
      <PumaIcon />
    </section>
  );
};

export default Trending;
