import Heading from "@components/heading/Heading";

function ProductHeader() {
  return (
    <section>
      <Heading className=""> All Products</Heading>
      <p className="text-sm max-w-[1500px] min-[1500px]:mx-auto">
        Need help deciding which product is the right size
        for you? Check out our{" "}
        <span className="inline underline cursor-pointer">
          size guide{" "}
        </span>
        for a smooth decision.{" "}
      </p>
    </section>
  );
}

export default ProductHeader;
