import s from "./s_ProductSlider.module.css";

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
    <section className={s["main-productSlider-container"]}>
      {productSlider_items.map((item) => (
        <section
          key={item.id}
          className={s["productSlider-container"]}
          style={{ background: item.img }}
        ></section>
      ))}
    </section>
  );
};

export default ProductSlider;
