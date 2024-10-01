import DeleteIcon from '@assets/icons/DeleteIcon';
import EmptyCart from "@assets/icons/EmptyCart";
import Button from "@components/reusables/button";
import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import { CartItem } from "@src/tsTypes/react-types";
import {
  addValue,
  cartData,
  reduceValue,
  removeFromCart,
} from "@store/cartSlice";
import { format } from "@utils/format/format";
import { FC } from "react";
import { Link } from "react-router-dom";
import { getButtonProps } from "../u_cart";

const CartDisplay: FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartData);

  return (
    <>
      {cart?.length ? (
        cart.map((data) => {
          const { images, name, type, quantity, price } =
            data;
          const image = images[0]?.file.url
          const totalPrice = price * quantity;
          const { text, style } = getButtonProps(quantity);

          return (
            <section
              key={name}
              className="flex gap-x-2 justify-between w-full py-4 border-b border-solid border-gray-300"
            >
              <figure className="w-1/3 max-w-[95px] h-auto bg-[#9ca3af26]">
                <img
                  src={image}
                  alt={type}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </figure>
              <section className="flex flex-col justify-between ml-2 w-1/3 gap-y-1">
                <p className="text-xs sm:text-sm font-medium truncate">
                  {name}
                </p>
                <Button
                  styles={`text-xs w-[4.8rem] sm:text-base cursor-not-allowed my-2 text-sm font-medium sm:w-24 ${style}`}
                  aria-label={`Quantity: ${quantity} ${text}`}
                >
                  {text}
                </Button>
                <div className="flex items-center">
                  <Button
                    data-testid="remove-icon"
                    className="flex items-center gap-x-1 text-xs sm:text-sm font-medium cursor-pointer"
                    onClick={() =>
                      dispatch(removeFromCart(data))
                    }
                    aria-label={`Remove ${name} from cart`}
                  >
                    <DeleteIcon /> Remove
                  </Button>
                </div>
              </section>
              <section className="flex flex-col justify-between w-5/12">
                <p className="ml-auto text-right text-xs font-medium">
                  &#8358; {format(totalPrice)}
                </p>
                <section
                  data-testid="modify-product"
                  className="flex justify-end"
                >
                  <Button
                    styles={`flex items-center justify-center border border-r-0 size-5 md:size-6 ${
                      quantity <= 1
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() =>
                      quantity > 1 &&
                      dispatch(reduceValue(data))
                    }
                    aria-label={`Reduce quantity of ${name}`}
                  >
                    -
                  </Button>
                  <p className="flex justify-center items-center text-center text-xs border px-2 opacity-50">
                    {quantity}
                  </p>
                  <Button
                    styles={`flex items-center justify-center border-l-0 border size-5 md:size-6 ${
                      quantity === 10
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() =>
                      quantity < 10 &&
                      dispatch(addValue(data))
                    }
                    aria-label={`Increase quantity of ${name}`}
                  >
                    +
                  </Button>
                </section>
              </section>
            </section>
          );
        })
      ) : (
        <aside className="flex flex-col items-center justify-center w-full">
          <EmptyCart size="size-[15em]" />
          <p className="italic text-center">
            You have no items in your shopping cart. <br />
            Let&apos;s go buy something!
          </p>
          <Link to="/products" className="mt-6">
            <Button styles="w-36 h-9 bg-black hover:bg-[var(--pry-col)] rounded-[8px] text-white [word-spacing:3px]">
              Start Shopping
            </Button>
          </Link>
        </aside>
      )}
    </>
  );
};

export default CartDisplay;
