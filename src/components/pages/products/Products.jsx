import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllData } from "../../../contentful/contentful";
import { modifyCart } from "../../../store/cartSlice";
import { setProducts } from "../../../store/productSlice";
import { format } from "../../../utils/format/format";
import Button from "../../reusables/button/Button";
import Heading from "./../../heading/Heading";
import LoadingAnimation from "../../loadingAnimation/Loader";

const Products = ({ Sort, Filter }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.products);
  const products = useSelector(
    (state) => state.products.products
  );
  const dispatch = useDispatch();
  const productsPerSlide = 10;
  const [next, setNext] = useState(productsPerSlide);

  const loadData = async function () {
    const { items } = await fetchAllData("products");
    items.map((item) => (item.fields.quantity = 0));
    dispatch(setProducts(items));
    return items;
  };
  const { isLoading } = useQuery("load", loadData);
  const Skeleton = Array(6).fill(0); // for skeleton

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
    <section className="relative flex flex-col p-4 min-h-[500px] bg-[var(--white)] overflow-x-hidden mt-28 max-w-[1500px] min-[1500px]:mx-auto">
      {!isLoading ?  <><Heading> All Products</Heading>
      <p className="text-[.8rem]">
        Need help deciding which product is the right size
        for you? Check out our{" "}
        <span className="inline underline">
          size guide{" "}
        </span>
        for a smooth decision.{" "}
      </p>
      <div className="border-t-[1px] border-gray-200 w-[120%] my-4 box-border relative right-[16px]"></div>
      <section className="flex justify-between gap-x-2">
        {Sort}
        {Filter}
      </section> </> : null}
      <section className="flex flex-wrap gap-2 justify-center lg:gap-x-10">
        {!isLoading
          ? [...products.slice(0, next)]?.map((product) => {
              const { name, images, type, price } =
                product.fields;

              return (
                <section
                  key={name}
                  className="flex flex-col relative w-[47%] sm:w-[30%] md:w-[23%] lg:w-[30%] h-[18rem] sm:h-[36em] max-h-[700px] cursor-pointer border-none" //swap styles from w-48 h-64  make this responsive
                  onClick={(e) => handleClick(e, product)}
                >
                  <section className="relative w-full bg-[#fff] h-[60%] lg:-h-[700px]">
                    <img
                      src={images[0].fields.file.url}
                      loading="lazy"
                      className="w-full h-full bg-[#a8a29e1a] object-cover hover:transition-all duration-300  border border-[#8080801c]"
                    />
                    <Button
                      styles={
                        "absolute right-0 top-0 w-full h-6 bg-[var(--black)] text-[var(--white)] text-[.8rem] border-none outline-none cursor-pointer"
                      }
                    >
                      {" "}
                      {[...cart].some(
                        (item) => item.name === name
                      )
                        ? "Remove from Cart"
                        : "Add to Cart"}
                    </Button>
                  </section>
                  {[name, type, price].map((item, i) => (
                    <p
                      key={item}
                      className={`text-[.8rem] mt-1 ${
                        i > 1 ? "font-medium" : ""
                      } ${
                        i === 1
                          ? "text-[#737373] text-[11px]"
                          : ""
                      } `}
                    >
                      {i > 1 ? format(price) : item}
                    </p>
                  ))}
                </section>
              );
            })
          :  <section className="w-full h-[80vh] flex items-center justify-center">
          <LoadingAnimation />
          </section>
        }
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
