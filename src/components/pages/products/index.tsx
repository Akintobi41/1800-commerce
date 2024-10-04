import Filter from "@components/filter";
import LoadingAnimation from "@components/loadingAnimation";
import Sort from "@components/sort";
import { useAppSelector } from "@hooks/useAppStore";
import useScroll from "@hooks/useScroll/useScroll";
import { productsData } from "@store/productSlice";
import { FC, useState } from "react";
import LoadMoreProducts from "./loadMoreProducts";
import ProductHeader from "./productHeader.jsx/index.js";
import RenderProducts from "./renderProducts";
import ScrollButton from "./scrollButton";
import { useFetchProducts } from "./useFetchProducts";

const Products: FC = () => {
  const products = useAppSelector(productsData);
  const productsPerSlide = 10;
  const [next, setNext] = useState(productsPerSlide);
  const { isLoading } = useFetchProducts();
  const { backToTopButton, Scroll } = useScroll();

  function handleMoreProducts() {
    setNext(next + productsPerSlide);
  }

  return (
    <section
      data-testid="products"
      className="relative flex flex-col px-4 min-h-[500px] bg-[var(--white)] overflow-x-hidden"
    >
      <section className=" relative flex  flex-wrap gap-4 sm:gap-x-6 justify-center mt-24 lg:gap-x-10 max-w-[1500px] min-[1500px]:mx-auto">
        {!isLoading && products.length > 0 ? (
          <>
            <ProductHeader />
            <div className="border-t-[1px] border-gray-200 w-[180%] my-4 box-border relative right-[16px]"></div>
            <section
              data-testid="sort-section"
              className="flex justify-between gap-x-2 max-w-[1450px] w-full  min-[1500px]:mx-auto"
            >
              <Sort />
              <Filter />
            </section>{" "}
            <RenderProducts next={next} />
          </>
        ) : (
          <section className="w-full h-[80vh] flex items-center justify-center">
            <LoadingAnimation />
          </section>
        )}
        <ScrollButton btn={backToTopButton} scroll={Scroll} />
      </section>
      {next && next < products?.length && (
        <LoadMoreProducts handleMoreProducts={handleMoreProducts} />
      )}
    </section>
  );
};

export default Products;
