import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

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
    navigate('/products')
    console.log(
      slideDescriptionArray[
        slideDescriptionArray.length - 1
      ]
    );
  }

  return (
    <>
      <section
        className={`relative flex center h-80 z-0 p-6 text-[var(--white)] bg-[${currentSlideBackground}] bg-no-repeat bg-[#53caec]`}
      >
        <p className='font-semibold text-[1.5rem] mb-20 text-[var(--white)]'>{slideDescription}</p>
        <p className='font-medium absolute top-[50%] cursor-pointer py-[.05rem] px-[.35rem] border-b-[1px] border-b-[rgb(15,15,15)]  text-[var(--white)]' onClick={viewAll}>
          View All
        </p>
      </section>
    </>
  );
};

export default Slider;
