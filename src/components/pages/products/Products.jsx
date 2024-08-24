import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";
import { modifyCart } from "../../../store/cartSlice";
import LoadingAnimation from "../../loadingAnimation/Loader";
import Button from "../../reusables/button/Button";
import Heading from "./../../heading/Heading";
import { useFetchProducts } from "./useFetchProducts";
import RenderProducts from "./RenderProducts";


const Products = ({ Sort, Filter }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.products);
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
    <section data-testid='products' className="relative flex flex-col px-4 min-h-[500px] bg-[var(--white)] overflow-x-hidden">
      {!isLoading ? (
        <>
          <Heading className="mt-24"> All Products</Heading>
          <p className="text-[.8rem] max-w-[1500px] min-[1500px]:mx-auto">
            Need help deciding which product is the right
            size for you? Check out our{" "}
            <span className="inline underline cursor-pointer">
              size guide{" "}
            </span>
            for a smooth decision.{" "}
          </p>
          <div className="border-t-[1px] border-gray-200 w-[180%] my-4 box-border relative right-[16px]"></div>
          <section data-testid= 'sort-section' className="flex justify-between gap-x-2 max-w-[1450px] w-full  min-[1500px]:mx-auto">
            {Sort}
            {Filter}
          </section>{" "}
        </>
      ) : null}
      <section className=" relative flex flex-wrap gap-2 justify-center lg:gap-x-10 max-w-[1500px] min-[1500px]:mx-auto">
        {!isLoading && products.length > 0 ? (
          <RenderProducts next={ next} handleClick={handleClick} />
        ) : (
          <section className="w-full h-[80vh] flex items-center justify-center">
            <LoadingAnimation />
          </section>
        )}
        {backToTopButton && (
          <Button
            styles={
              "fixed bottom-[3rem] right-[.5rem] rounded-[50%] flex justify-center items-center cursor-pointer bg-[var(--pry-col)] size-[3rem]"
            }
            onClick={() => Scroll()}
          >
            {" "}
            <img src="/src/assets/Icons/up-arrow.svg" className="size-[60%] stroke-slate-950" />
          </Button>
        )}
      </section>
      {!isLoading && next < products?.length ? (
        <p
          className="text-center font-bold cursor-pointer mt-6"
          onClick={handleMoreProducts}
        >
          Load More
        </p>
      ) : null}
    </section>
  );
};

export default Products;
