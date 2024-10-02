import Button from "@components/reusables/button";
import { useAppSelector } from "@hooks/useAppStore";
import {
  CartItem,
  Product,
} from "@src/tsTypes/react-types";
import { cartData, modifyCart } from "@store/cartSlice";
import { productsData } from "@store/productSlice";
import { format } from "@utils/format/format";
import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

type RpProps = {
  next: number;
};

const RenderProducts: FC<RpProps> = ({ next }) => {
  const cart = useAppSelector(cartData);

  const products: Product[] =
    useAppSelector(productsData) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
    product: Product
  ) {
    const cartRedirect =
      (
        e.target as HTMLButtonElement
      ).tagName.toLowerCase() === "button";

    if (cartRedirect) {
      dispatch(modifyCart(product as unknown as CartItem));
    } else {
      navigate(`/products/${product?.id}`);
    }
  }

  return (
    <>
      {[...products.slice(0, next)].map((product) => {
        const { name, images, type, price } = product;

        return (
          <section
            data-testid="product"
            key={name}
            className="flex flex-col relative w-[46%] sm:w-[30%] md:w-[23%] lg:w-[30%] h-[18rem] sm:h-[24em] max-h-[700px] cursor-pointer border-none"
            onClick={(e) => handleClick(e, product)}
          >
            <section className="relative w-full bg-[#fff] h-[60%] lg:-h-[700px]">
              <img
                src={images[0].fields.file.url}
                alt={type}
                loading="lazy"
                className="w-full h-full bg-[#a8a29e1a] object-cover hover:transition-all duration-300  border border-[#8080801c]"
              />
              <Button
                styles={
                  "absolute right-0 top-0 w-full h-6 bg-[var(--black)] text-[var(--white)] text-sm border-none outline-none cursor-pointer"
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
                className={`text-sm mt-1 w-full truncate text-ellipsis overflow-hidden ${
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
      })}
    </>
  );
};

export default RenderProducts;
