const ProductSlider = () => {
  const productSlider_items = [
    { id: 1, name: "Caps", img: "url('') no-repeat grey" },
    { id: 2, name: "Bags", img: "url('') no-repeat grey" },
    {
      id: 3,
      name: "Trousers",
      img: "url('') no-repeat grey",
    },
  ];
  return (
    <section className='m-6'>
      {productSlider_items.map((item) => (
        <section
          key={item.id}
          className='p-6 my-[4.15rem] h-[18rem]'
          style={{ background: item.img }}
        ></section>
      ))}
    </section>
  );
};

export default ProductSlider;
