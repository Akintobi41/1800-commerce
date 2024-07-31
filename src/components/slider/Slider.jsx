import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../reusables/button/Button";
import productSlice from "../../store/productSlice";

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] =
    useState(0);
const navigate = useNavigate()
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
    "Fancy Exquisite Watches": "url('')",
    "New Gen and Retro Shoes": "url('')",
  };
  

  const slideDescription =
    Object.keys(slideBackground)[activeSlideIndex];
  const currentSlideBackground =
    slideBackground[slideDescription];

  const slideDescriptionArray = slideDescription.split(" ");

  function viewAll() {
    navigate(('/products'))
    // console.log(
    //   slideDescriptionArray[
    //     slideDescriptionArray.length - 1
    //   ]
    // )
  }
const images = ['/src/assets/Images/bg-1.jpg','/src/assets/Images/bg-1c.jpg', '/src/assets/Images/bg-1b.jpg' ]
  return (
    <>
      <section
        className={`relative flex center h-[70%] max-h-[30rem] lg:max-h-[30rem] z-0 mt-4 bg-[#fff] justify-between w-full max-w-[1500px] mx-auto`}
      >
        {images.map((img,i) => ( 
          <div key={img} className={`w-full ${i> 0 ? 'ml-2' : ''}  ${i === 1 ? 'hidden lg:block' : ''} bg-gray-400`}>
          <img src={img} alt="background-image" loading="lazy" className="object-cover size-full" />
          </div>
        ))}
        
      </section>
      <section className="flex flex-col items-center mb-6 px-4">
      <h1 className="text-[33px] font-medium">Be bright. Be bold.</h1>
      <p className="text-center">Meet our bright new mood-boosting colorway.</p>
      </section>
      <section className="flex justify-center">
      <Button className='font-medium h-12 cursor-pointer py-0 px-[34px] border-b-[rgb(15,15,15)] rounded-[24px] text-[var(--white)] leading-[48px] bg-[var(--black)] hover:bg-[var(--pry-col)]' onClick={viewAll}>
          Shop - New Arrivals
        </Button>
      </section>
      
    </>
  );
};

export default Slider;
