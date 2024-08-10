const ProductSlider = () => {
  const productSlider_items = [
    {
      id: 1,
      name: "Caps",
      img: "url('/src/assets/Images/bg-female (1).jpg') no-repeat grey",
    },
    {
      id: 2,
      name: "Bags",
      img: "url('/src/assets/Images/bg-male (1).jpg') no-repeat grey",
    },
  ];
  return (
    <>
      <p className="lg:text-[2rem] text-center font-bold mt-6 mb-2">
        Doing Things look good on you.
      </p>
      <section className="mx-4 h-full flex flex-col lg:flex-row lg:justify-between">
        {productSlider_items.map((item) => (
          <section
            key={item.id}
            className="mb-[4.15rem] h-[20rem] md:h-[24rem] lg:h-[30rem] lg:w-[48%] bg-cover bg-center"
            style={{ background: item.img }}
          ></section>
        ))}
      </section>
    </>
  );
};

export default ProductSlider;
