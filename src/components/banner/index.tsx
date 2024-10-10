import HomeBg from "@components/homeBg";
import Button from "@components/reusables/button";
import { useNavigate } from "react-router-dom";

const FeatureBanner = () => {
  const navigate = useNavigate();

  function viewAll() {
    navigate("/products");
  }

  return (
    <>
      <section
        className={`relative flex center h-[18rem] lg:h-[25rem] lg:min-h-[25rem] z-0 bg-[#fff] justify-between w-full max-w-[1500px] mx-auto mt-24`}
      >
        <HomeBg />
      </section>
      <section className="flex flex-col items-center mb-6 px-4">
        <h1 className="text-[33px] font-medium mt-10">
          Be bright. Be bold.
        </h1>
        <p className="text-center">
          Meet our bright new mood-boosting colorway.
        </p>
      </section>
      <section className="flex justify-center">
        <Button
          data-testid="product-btn"
          aria-label="navigate to products page"
          className="font-medium h-12 cursor-pointer py-0 px-8 my-4 border-b-[rgb(15,15,15)] rounded-[24px] text-[var(--white)] leading-[48px] bg-[var(--black)] hover:bg-[var(--pry-col)]"
          onClick={viewAll}
        >
          Shop - New Arrivals
        </Button>
      </section>
    </>
  );
};

export default FeatureBanner;
