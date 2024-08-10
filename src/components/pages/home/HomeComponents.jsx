import ProductSlider from "../../../components/productSlider/ProductSlider";
import Trending from "../../../components/Trending/Trending";
import About from "../../../components/about/About";
import Patronize from "../../../components/patronize/Patronize";
import Subscribe from "../../../components/subscribe/Subscribe";
import ReachOut from "../../../components/reachOut/ReachOut";

function HomeComponents() {
  return (
    <div className="flex flex-col">
      <ProductSlider />
      <hr className="section" />

      <Trending />
      <hr className="section" />

      <About />
      <hr className="section" />

      <Patronize />
      <hr className="section" />

      <Subscribe />
      <ReachOut />
    </div>
  );
}

export default HomeComponents;
