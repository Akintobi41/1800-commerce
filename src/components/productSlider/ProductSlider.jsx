import bgImage1 from "/src/assets/Images/bg-3.jpg";
import bgImage2 from "/src/assets/Images/bg-female.jpg";

const ProductSlider = () => {
  const productSlider_items = [
    {
      id: 1,
      name: "Caps",
      img: bgImage1,
    },
    {
      id: 2,
      name: "Bags",
      img: bgImage2,
    },
  ];
  return (
    <>
      {/* <hr /> */}
      <p className="text-[33px] text-center font-medium">
        Doing Things look good on you.
      </p>
      <section className="mx-4 h-full flex gap-y-4 flex-col lg:flex-row lg:justify-between">
        {productSlider_items.map((item) => 
          (
            <section
              key={item.id}
              className={`h-[20rem] md:h-[24rem] lg:h-[30rem] lg:w-[48%] bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            ></section>
          )
        )}
      </section>
    </>
  );
};

export default ProductSlider;
