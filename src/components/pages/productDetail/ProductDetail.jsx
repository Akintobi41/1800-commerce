import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchData } from "../../../contentful/contentful";
import { modifyCart } from "../../../store/cartSlice";
import ImageSwiper from "../../imageSwiper/ImageSwiper";
import LoadingAnimation from "../../loadingAnimation/Loader";
import Button from "../../reusables/button/Button";

function ProductDetail() {
  const { id } = useParams();
  const cart = useSelector((state) => state.cart.products);
  const getProduct = async function () {
    return await fetchData(id).then((data) => data);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [route, setRoute] = useState(false);

  const { data, isLoading } = useQuery(
    "product",
    getProduct
  );

  function displayProduct() {
    if (data) {
      const { images, name, description, price } =
        data.fields;
      const checkProduct = [...cart].some(
        (item) => item.name === name
      );

      return (
        <>
          <section className="mt-24 max-w-[1500px] min-[1500px]:mx-auto">
            <ImageSwiper images={images} />
            <section className="flex w-full h-full justify-center px-4">
              {images.map((img) => (
                <img
                  src={img.fields.file.url}
                  alt=""
                  className="size-[4rem] sm:size-24 cursor-pointer bg-[#cbd5e140] mr-[.5rem]"
                  key={img.fields.file.url}
                />
              ))}
            </section>
            <section className="flex flex-col items-center">
              <p className="text-[1.25rem] font-bold p-4">
                {name}{" "}
              </p>
              <details className="cursor-pointer transition-all duration-500 text-center">
                <summary className="text-sm underline">
                  read more about this product
                </summary>
                <p className="px-4 text-sm max-w-[700px] mx-auto">
                  {description}{" "}
                </p>
              </details>
              <p className="p-4 text-sm text-[#737373] tracking-[-.653px]">
                {" "}
                Earn up to 64 points with 1800 Rewards
              </p>
            </section>
          </section>
          <section className="px-4 w-full flex justify-center">
            <Button
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
                    &#8358;{price.toLocaleString()}
                  </span>{" "}
                </span>
              )}
            </Button>
          </section>
        </>
      );
    }
  }

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
    dispatch(modifyCart(data.fields));
    setRoute(true);
  }

  return (
    <section className="overflow-x-hidden">
      {displayProduct()}
      {isLoading ? (
        <section className="w-full h-[80vh] flex items-center justify-center">
          <LoadingAnimation />
        </section>
      ) : !data ? (
        <p className="">Unable to fetch product details</p>
      ) : null}
    </section>
  );
}
export default ProductDetail;
