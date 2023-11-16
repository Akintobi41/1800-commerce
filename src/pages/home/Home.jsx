import Slider from "../../components/slider/Slider";
import ProductSlider from "../../components/productSlider/ProductSlider";
import Trending from "../../components/Trending/Trending";
import About from "../../components/about/About";
import Patronize from "../../components/patronize/Patronize";
import Subscribe from "../../components/subscribe/Subscribe";
import ReachOut from "../../components/reachOut/ReachOut";
import { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/MyContext";

const Home = () => {
  const { setSearch } = useContext(MyContext);

  useEffect(() => {
    setSearch(false);
  }, []);
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
