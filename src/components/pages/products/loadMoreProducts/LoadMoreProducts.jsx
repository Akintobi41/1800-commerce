import { useSelector } from "react-redux";

function LoadMoreProducts({
  isLoading,
  next,
  handleMoreProducts,
}) {
  const products =
    useSelector((state) => state.products.products) || [];

  return (
    <>
      {!isLoading && next < products?.length ? (
        <p
          className="text-center underline font-bold cursor-pointer mt-6"
          onClick={handleMoreProducts}
        >
          Load More
        </p>
      ) : null}
    </>
  );
}

export default LoadMoreProducts;
