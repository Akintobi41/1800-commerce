import s from "./s_Trending.module.css";
const Trending = () => {
  const brands = ["", "", ""];
  return (
    <section className={s["trending-container"]}>
      <h3>2023 Trending Brands</h3>
      {brands.map((brand) => (
        <img src={brand} key={brand} />
      ))}
    </section>
  );
};

export default Trending;
