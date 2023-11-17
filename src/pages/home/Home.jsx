/* eslint-disable react-hooks/exhaustive-deps */
import Slider from "../../components/slider/Slider";
import ProductSlider from "../../components/productSlider/ProductSlider";
import Trending from "../../components/Trending/Trending";
import About from "../../components/about/About";
import Patronize from "../../components/patronize/Patronize";
import Subscribe from "../../components/subscribe/Subscribe";
import ReachOut from "../../components/reachOut/ReachOut";
import { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
import useResetSearchAndMenu from "../../hooks/useResetSearchAndMenu";

const Home = () => {
  const { setSearch, setMenuToggle } =
    useContext(MyContext);
  useResetSearchAndMenu(setSearch, setMenuToggle);

  return (
    <section>
      <Slider />
      <ProductSlider />
      <Trending />
      <About />
      <Patronize />
      <Subscribe />
      <ReachOut />
    </section>
  );
};

export default Home;
