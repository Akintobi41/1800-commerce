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
  console.log(productSlider_items.img);
  return (
    <>
      <p className="lg:text-[2rem] text-center font-bold mt-6 mb-2">
        Doing Things look good on you.
      </p>
      <section className="mx-4 h-full flex flex-col lg:flex-row lg:justify-between">
        {productSlider_items.map((item) => {
          console.log(item.img);
          return (
            <section
              key={item.id}
              className={`mb-[4.15rem] h-[20rem] md:h-[24rem] lg:h-[30rem] lg:w-[48%] bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            ></section>
          );
        })}
      </section>
    </>
  );
};

export default ProductSlider;
