import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] =
    useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlideIndex(
        (prevIndex) => (prevIndex + 1) % 3
      );
    }, 2000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [activeSlideIndex]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slideBackground = {
    "Custom Corporate Bags": "url('')",
    "Cargo Tailored Trousers": "url('')",
    "Sleek Fitted Caps": "url('')",
  };

  const slideDescription =
    Object.keys(slideBackground)[activeSlideIndex];
  const currentSlideBackground =
    slideBackground[slideDescription];

  const slideDescriptionArray = slideDescription.split(" ");
  const navigate = useNavigate();

  function viewAll() {
    // navigate('/products')
    console.log(
      slideDescriptionArray[
        slideDescriptionArray.length - 1
      ]
    );
  }

  return (
    <>
      <section
        className={`relative flex center h-64 z-0 p-6 text-[var(--white)] bg-[${currentSlideBackground}] bg-no-repeat bg-[#53caec]`}
      >
        <p className='font-semibold text-[1.5rem] mb-20 text-[var(--white)]'>{slideDescription}</p>
        
      </section>
      <section className="flex flex-col items-center px-6 mb-6">
      <h1 className="text-[36px] font-medium">Be bright. Be bold.</h1>
      <p className="text-center">Meet our bright new mood-boosting colorway.</p>
      </section>
      <Link to='/products' className="flex justify-center">
      <button className='font-medium h-12 cursor-pointer py-0 px-[34px] border-b-[rgb(15,15,15)] rounded-[24px] text-[var(--white)] leading-[48px] bg-[var(--black)]' onClick={viewAll}>
          Shop - New Arrivals
        </button>
      </Link>
      
    </>
  );
};

export default Slider;
