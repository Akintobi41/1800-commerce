import s from "./s_Trending.module.css";
const Trending = () => {
  const brands = [
    "/Images/puma-logo.svg",
    "/Images/newlogo_600x.webp",
    "/Images/jd-sports.svg",
    "/Images/jordan-2.svg",
  ];
  return (
    <section className={s["trending-container"]}>
      <h3>2023 Trending Brands</h3>
      {brands.map((brand) => (
        <img
          src={brand}
          key={brand}
          className={s["trending-img"]}
        />
      ))}
    </section>
  );
};

export default Trending;
