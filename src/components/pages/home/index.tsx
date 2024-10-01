import FeatureBanner from "@components/banner";
import { FC } from "react";
import HomeComponents from "./homeComponents";

const Home: FC = () => {
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
