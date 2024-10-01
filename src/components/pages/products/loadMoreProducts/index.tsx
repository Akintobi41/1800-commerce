import Button from "@components/reusables/button";
import { FC } from "react";

interface LoadMoreProps { 
  handleMoreProducts: ()=> void
}
const LoadMoreProducts : FC <LoadMoreProps> = ({ handleMoreProducts })=> {

  return (
    <>
      <Button
        name="load-more"
        data-testid="load-more"
        className="text-center underline font-bold cursor-pointer mt-6"
        onClick={handleMoreProducts}
      >
        Load More
      </Button>
    </>
  );
}

export default LoadMoreProducts;
