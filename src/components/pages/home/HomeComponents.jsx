import Trending from "../../../components/Trending/Trending";
import Patronize from "../../../components/patronize/Patronize";
import Subscribe from "../../../components/subscribe/Subscribe";
import ReachOut from "../../../components/reachOut/ReachOut";
import AboutSection from "../../aboutSection/AboutSection";
import ShowcaseSection from "../../showcaseSection/ShowcaseSection";

const line = (
  <hr className="section my-10 w-[140%] ml-[-20%]" />
);
function HomeComponents() {
  return (
    <div className="flex flex-col  gap-y-4">
      {line}
      <ShowcaseSection/>
      {line}
      <Trending />
      {line}
      <AboutSection />
      {line}
      <Patronize />
      {line}
      <Subscribe />
      {line}
      <ReachOut />
    </div>
  );
}

export default HomeComponents;
