import s from "./s_Trending.module.css";
import "/styles/sharedStyles.css";
import JordanIcon from "../../assets/Icons/JordanIcon";
import JdSportsIcon from "../../assets/Icons/JdSportsIcon";
import PumaIcon from "../../assets/Icons/PumaIcon";

const Trending = () => {
  // const brands = [
  //   {},

  // ];
  return (
    <section className={s["trending-container"]}>
      <h2 className="shared-h2">2023 Trending Brands</h2>
      {/* {brands.map((brand) => (
        <img
          src={brand}
          key={brand}
          className={s["trending-img"]}
        />
      ))} */}
      <JordanIcon />
      <JdSportsIcon />
      <PumaIcon />
    </section>
  );
};

export default Trending;
