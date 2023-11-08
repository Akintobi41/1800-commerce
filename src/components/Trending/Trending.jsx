import s from "./s_Trending.module.css";
import "/styles/sharedStyles.css";

const Trending = () => {
  const brands = [
    "/Images/puma-logo.svg",
    "/Images/newlogo_600x.webp",
    "/Images/jd-sports.svg",
    "/Images/jordan-2.svg",
  ];
  return (
    <section className={s["trending-container"]}>
      <h2 className="shared-h2">2023 Trending Brands</h2>
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
