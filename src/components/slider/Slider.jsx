import { useState } from "react";
import s from "./s_Slider.module.css";
import { useEffect } from "react";

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
    "Custom Corporate Bags": "url('') no-repeat #53caec",
    "Cargo Tailored Trousers": "url('') no-repeat #53caec",
    "Sleek Fitted Caps": "url('') no-repeat #53caec",
  };

  const slideDescription =
    Object.keys(slideBackground)[activeSlideIndex];
  const currentSlideBackground =
    slideBackground[slideDescription];

  const slideDescriptionArray = slideDescription.split(" ");

  function viewAll() {
    console.log(
      slideDescriptionArray[
        slideDescriptionArray.length - 1
      ]
    );
  }

  return (
    <>
      <section
        className={s["slider-section"]}
        style={{
          background: currentSlideBackground,
        }}
      >
        <p className={s.description}>{slideDescription}</p>
        <p className={s.shop} onClick={viewAll}>
          View All
        </p>
      </section>
    </>
  );
};

export default Slider;
