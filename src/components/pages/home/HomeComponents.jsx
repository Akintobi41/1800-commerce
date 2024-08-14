import ProductSlider from "../../../components/productSlider/ProductSlider";
import Trending from "../../../components/Trending/Trending";
import Patronize from "../../../components/patronize/Patronize";
import Subscribe from "../../../components/subscribe/Subscribe";
import ReachOut from "../../../components/reachOut/ReachOut";
import AboutSection from "../../aboutSection/AboutSection";


function HomeComponents() {
  return (
    <div className="flex flex-col  gap-y-4">
      <hr className="section mt-6 w-[140%] ml-[-20%]" />

      <ProductSlider />
      <hr className="section mt-6 w-[140%] ml-[-20%]" />

      <Trending />

      <hr className="section mt-6 w-[140%] ml-[-20%]" />
      <AboutSection />
      <hr className="section mt-6 w-[140%] ml-[-20%]" />
      
      <Patronize />
      <hr className="section mt-6 w-[140%] ml-[-20%]" />
   
      <Subscribe />
      <hr className="section mt-6 w-[140%] ml-[-20%]" />
      <ReachOut />
    </div>
  );
}

export default HomeComponents;
