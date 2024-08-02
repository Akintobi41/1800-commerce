import { useNavigate } from "react-router-dom";
import Button from "../reusables/button/Button";
import HomeBg from "../homeBg/HomeBg";

const FeatureBanner = () => {
  const navigate = useNavigate();
  function viewAll() {
    navigate("/products");
  }
  return (
    <>
      <section
        className={`relative flex center h-[15rem] lg:h-[25rem] lg:min-h-[25rem] max-h-[30rem] z-0 bg-[#fff] justify-between w-full max-w-[1500px] mx-auto mt-24`}
      >
        <HomeBg />
      </section>
      <section className="flex flex-col items-center mb-6 px-4">
        <h1 className="text-[33px] font-medium">
          Be bright. Be bold.
        </h1>
        <p className="text-center">
          Meet our bright new mood-boosting colorway.
        </p>
      </section>
      <section className="flex justify-center">
        <Button
          className="font-medium h-12 cursor-pointer py-0 px-[34px] border-b-[rgb(15,15,15)] rounded-[24px] text-[var(--white)] leading-[48px] bg-[var(--black)] hover:bg-[var(--pry-col)]"
          onClick={viewAll}
        >
          Shop - New Arrivals
        </Button>
      </section>
    </>
  );
};

export default FeatureBanner;
