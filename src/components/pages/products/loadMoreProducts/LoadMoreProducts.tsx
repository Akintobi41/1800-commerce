import Button from "@reusables/button/Button";

function LoadMoreProducts({
  handleMoreProducts,
}) {

  return (
    <>
        <Button
          name = 'load-more'
          data-testid = 'load-more'
          className="text-center underline font-bold cursor-pointer mt-6"
          onClick={handleMoreProducts}
        >
          Load More
        </Button>
      
    </>
  );
}

export default LoadMoreProducts;
