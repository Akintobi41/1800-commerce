/* eslint-disable react-hooks/exhaustive-deps */
import ProductSlider from "../../../components/productSlider/ProductSlider";
import Trending from "../../../components/Trending/Trending";
import About from "../../../components/about/About";
import Patronize from "../../../components/patronize/Patronize";
import Subscribe from "../../../components/subscribe/Subscribe";
import ReachOut from "../../../components/reachOut/ReachOut";
import Slider from './../../slider/Slider';

const Home = () => {
  
  return (
    <>
    <Slider/>
    <section className="max-w-[1500px] mx-auto w-full">
      <ProductSlider />
      <Trending />
      <About />
      <Patronize />
      <Subscribe />
      <ReachOut />
    </section>
    </>
    
  );
};

export default Home;
