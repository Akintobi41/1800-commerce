/* eslint-disable react-hooks/exhaustive-deps */
import FeatureBanner from "@components/banner/FeatureBanner";
import HomeComponents from "./homeComponents/HomeComponents";

const Home = () => {
  return (
    <section data-testid="home" className={`flex flex-col`}>
      <FeatureBanner />
      <section className="max-w-[1500px] mx-auto w-full">
        <HomeComponents />
      </section>
    </section>
  );
};

export default Home;
