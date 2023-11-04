import s from "./s_Products.module.css";

const Products = () => {
  const products = [
    { id: 1, name: "Caps", img: "url('') no-repeat grey" },
    { id: 2, name: "Bags", img: "url('') no-repeat grey" },
    {
      id: 3,
      name: "Trousers",
      img: "url('') no-repeat grey",
    },
  ];
  return (
    <section className={s["main-product-container"]}>
      {products.map((item) => (
        <section
          key={item.id}
          className={s["product-container"]}
          style={{ background: item.img }}
        ></section>
      ))}
    </section>
  );
};

export default Products;
