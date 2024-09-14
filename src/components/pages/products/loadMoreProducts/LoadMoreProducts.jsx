import { useSelector } from "react-redux";
import Button from "@reusables/button/Button";

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
        <Button
          name = 'load-more'
          data-testid = 'load-more'
          className="text-center underline font-bold cursor-pointer mt-6"
          onClick={handleMoreProducts}
        >
          Load More
        </Button>
      ) : null}
    </>
  );
}

export default LoadMoreProducts;
