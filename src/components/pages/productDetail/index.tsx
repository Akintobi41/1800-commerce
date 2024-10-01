import ImageSwiper from "@components/imageSwiper";
import LoadingAnimation from "@components/loadingAnimation";
import Button from "@components/reusables/button";
import { fetchData } from "@contentful/contentful";
import {
  useAppDispatch,
  useAppSelector,
} from "@hooks/useAppStore";
import { CartItem, Product } from "@src/tsTypes/react-types";
import { cartData, modifyCart } from "@store/cartSlice";
import { productsData } from "@store/productSlice";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";

const ProductDetail : FC = ()=> {
  const { id } = useParams();
  const cart = useAppSelector(cartData);
  const products = useAppSelector(productsData) || [];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [route, setRoute] = useState(false);

  const productInStore = products.find(
    (item) => item.id === id
  );

  const { data, isLoading } = useQuery(
    ["product", id],
    () => {
      if (id) {
        return fetchData(id);
      }
    },
    {
      enabled: !productInStore,
      retry: 4,
    }
  );

  const product = productInStore || data;

  const checkProduct = [...cart].some(
    (item) => item.name === product?.name
  );

  useEffect(() => {
    if (route) {
      let timer1 = setTimeout(() => {
        navigate("/cart"); //route to cart once the product is added to the cart
      }, 800);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [route]);

  function handleClick() {
    dispatch(modifyCart(product as CartItem));
    setRoute(true);
  }

  console.log(product)

  return (
    <section
      data-testid="product-detail-section"
      className="overflow-x-hidden"
    >
      {product ? (
        <>
          <section
            data-testid="product"
            className="mt-24 max-w-[1500px] min-[1500px]:mx-auto"
          >
            <ImageSwiper images={product.images} />
            <section className="flex w-full h-full justify-center px-4">
              {product?.images?.map(
                (img) => (
                  <img
                    src={img.fields.file.url}
                    alt={product.name}
                    className="size-[4rem] sm:size-24 cursor-pointer bg-[#cbd5e140] mr-[.5rem]"
                    key={img.fields.file.url}
                    loading="lazy"
                  />
                )
              )}
            </section>
            <section className="flex flex-col items-center">
              <p className="text-[1.25rem] font-bold p-4 text-center">
                {product.name}{" "}
              </p>
              <details className="cursor-pointer transition-all duration-500 text-center">
                <summary className="text-sm underline">
                  read more about this product
                </summary>
                <p className="px-4 text-sm max-w-lg mx-auto">
                  {product.description}{" "}
                </p>
              </details>
              <p className="p-4 text-sm text-[#737373] tracking-[-.653px]">
                {" "}
                Earn up to 64 points with 1800 Rewards
              </p>
            </section>
          </section>
          <section className="p-6 w-full flex justify-center">
            <Button
              data-testid="add-to-bag"
              styles={`${
                checkProduct
                  ? "opacity-10 cursor-not-allowed pointer-events-none"
                  : ""
              } w-full max-w-[400px] bg-[var(--black)] text-[var(--white)] hover:bg-[var(--pry-col)] h-[3rem] rounded-[24px] font-medium cursor-pointer px-6 transition-[background] duration-[.25s]`}
              disabled={checkProduct}
              {...(!checkProduct && {
                onClick: handleClick,
              })}
            >
              {checkProduct ? (
                "Added to Bag"
              ) : (
                <span className="text-[var(--white)]">
                  {" "}
                  Add to Bag{" "}
                  <span className="ml-1 text-[inherit]">
                    {" "}
                    &#8358;{product.price?.toLocaleString()}
                  </span>{" "}
                </span>
              )}
            </Button>
          </section>
        </>
      ) : null}
      {isLoading ? (
        <section className="w-full h-[80vh] flex items-center justify-center">
          <LoadingAnimation />
        </section>
      ) : !product ? (
        <p className="my-40 px-4 leading-7 font-medium text-center max-w-md mx-auto">
          There might be an issue with your network
          connection or our servers might be down. <br />
          kindly refresh page to retry.
        </p>
      ) : null}
    </section>
  );
}
export default ProductDetail;
