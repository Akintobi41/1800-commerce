import AboutSection from "@components/aboutSection";
import Patronize from "@components/patronize";
import ReachOut from "@components/reachOut/ReachOut";
import ShowcaseSection from "@components/showcaseSection";
import Subscribe from "@components/subscribe";
import Trending from "@components/trending/Trending";

const line = (
  <hr
    role="separator"
    className="section my-10 w-[140%] ml-[-20%]"
  />
);

const HomeComponents = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {line}
      <ShowcaseSection />
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
};

export default HomeComponents;
