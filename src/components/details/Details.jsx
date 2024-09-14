/* eslint-disable react/prop-types */
import Button from "@reusables/button/Button";

const Details = ({ el, activeIndex, setActiveIndex }) => {
  function handleClick() {
    setActiveIndex((prevIndex) =>
      prevIndex === el.id ? null : el.id
    );
  }
  return (
    <>
      <Button
        data-testid='details-btn'
        styles={`flex items-center relative bg-[var(--white)] text-[#444] p-[1.1rem] w-full text-left cursor-pointer border-none outline-none duration-500 shadow-[1px_6px_15px_#cecece] after:content-[''] after:bg-[url('/src/assets/Icons/up-arrow.svg')] after:w-[1.3rem] after:h-[1.3rem] after:text-text after:text-[#777] after:ml-[5px] after:absolute after:right-[15px] after:translate-[translateX(0px)] after:transition-[transform] after:duration-300  ${
          activeIndex ? `after:translate-x-[5px] after:rotate-[180deg]` : ""
        }`}
        onClick={handleClick} 
        aria-label = 'details button'
        aria-expanded={
          el.id === activeIndex ? "true" : "false"
        }
        aria-controls={`panel-${el.id}`}
      >
        <p className='w-11/12 leading-[1.5]'>{el.title}</p>
      </Button>
      <div
      data-testid = 'summary-section'  
        className={`py-0 px-6 bg-white transition-[all_0.3s_ease-out] overflow-hidden ${activeIndex ? 'max-h-[1000px]' : 'max-h-[0px] hidden'}`}
      >
        <p className='py-4 px-0 text-left text-[.9rem] leading-[1.5]'>{el.text}</p>
      </div>
    </>
  );
};


export default Details;
