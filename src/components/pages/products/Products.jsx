import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";
import { modifyCart } from "../../../store/cartSlice";
import LoadingAnimation from "../../loadingAnimation/Loader";
import Heading from "./../../heading/Heading";
import { useFetchProducts } from "./useFetchProducts";
import RenderProducts from "./renderProducts/RenderProducts";
import Sort from "../../sort/Sort";
import Filter from "../../filter/Filter";
import ScrollButton from "./scrollButton/ScrollButton";
import LoadMoreProducts from "./loadMoreProducts/LoadMoreProducts";
import ProductHeader from './productHeader.jsx/ProductHeader';

const Products = () => {
  const navigate = useNavigate();
  const products =
    useSelector((state) => state.products.products) || [];
  const dispatch = useDispatch();
  const productsPerSlide = 10;
  const [next, setNext] = useState(productsPerSlide);
  const { isLoading } = useFetchProducts();
  const { backToTopButton, Scroll } = useScroll();
  function handleClick(e, product) {
    const cartRedirect = e.target.textContent;
    if (cartRedirect.endsWith("Cart")) {
      dispatch(modifyCart(product.fields));
    } else {
      navigate(`/products/${product.sys.id}`);
    }
  }

  function handleMoreProducts() {
    setNext(next + productsPerSlide);
  }

  return (
    <section
      data-testid="products"
      className="relative flex flex-col px-4 min-h-[500px] bg-[var(--white)] overflow-x-hidden"
    >
      <section className=" relative flex  flex-wrap gap-2 justify-center mt-24 lg:gap-x-10 max-w-[1500px] min-[1500px]:mx-auto">
        {!isLoading && products.length > 0 ? (
          <>
           <ProductHeader/>
            <div className="border-t-[1px] border-gray-200 w-[180%] my-4 box-border relative right-[16px]"></div>
            <section
              data-testid="sort-section"
              className="flex justify-between gap-x-2 max-w-[1450px] w-full  min-[1500px]:mx-auto"
            >
              <Sort />
              <Filter />
            </section>{" "}
            <RenderProducts
              next={next}
              handleClick={handleClick}
            />
          </>
        ) : (
          <section className="w-full h-[80vh] flex items-center justify-center">
            <LoadingAnimation />
          </section>
        )}
        <ScrollButton
          btn={backToTopButton}
          scroll={Scroll}
        />
      </section>
      <LoadMoreProducts
        isLoading={isLoading}
        next={next}
        handleMoreProducts={handleMoreProducts}
      />
    </section>
  );
};

export default Products;
