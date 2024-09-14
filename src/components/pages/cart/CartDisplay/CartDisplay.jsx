import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addValue,
  reduceValue,
  removeFromCart,
} from "@store/cartSlice";
import { format } from "@utils/format/format";
import Button from "@reusables/button/Button";
import { getButtonProps } from "../u_cart";
import DeleteIcon from "@icons/DeleteIcon";
import EmptyCart from "@icons/EmptyCart";

function CartDisplay() {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <>
      {cart?.length ? (
        cart.map((data) => {
          const { images, name, type, quantity, price } =
            data;
          const image = images[0].fields.file.url;
          const totalPrice = price * quantity;
          const { text, style } = getButtonProps(quantity);

          return (
            <section
              key={name}
              className="flex gap-x-2 justify-between w-[100%] h-[100%] py-4 border-b border-solid border-[grey]"
            >
              <>
                <figure className="w-[40%] h-auto bg-[#9ca3af26] max-w-[95px]">
                  <img
                    src={image}
                    alt={type}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </figure>
                <section className="flex flex-col justify-between  ml-2 w-[60px] min-[400px]:w-[150px] gap-y-1">
                  <p className="text-xs sm:text-sm font-medium truncate w-3/4 lg:w-full">
                    {name}
                  </p>
                  <Button
                    styles={`hidden sm:flex justify-center w-[5rem] cursor-not-allowed my-2 text-sm font-medium ${style} px-1 py-[.1rem] rounded w-[6rem]`}
                  >
                    {text}
                  </Button>
                  <div className="flex items-center">
                    <Button
                      data-testid="remove-icon"
                      className="flex items-center gap-x-1 text-xs sm:text-sm font-medium cursor-pointer"
                      onClick={() => {
                        dispatch(removeFromCart(data));
                      }}
                    >
                      <DeleteIcon /> Remove
                    </Button>
                  </div>
                </section>
              </>
              <section className="flex flex-col justify-between w-[130px]">
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
                    onClick={() => {
                      if (quantity > 1) {
                        dispatch(reduceValue(data));
                      }
                    }}
                  >
                    -
                  </Button>
                  <p className="flex justify-center items-center text-center text-[.65rem] border px-2 opacity-50 size-5 md:size-6">
                    {quantity}
                  </p>
                  <Button
                    styles={`flex items-center justify-center border-l-0 border size-5 md:size-6 ${
                      quantity === 10
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() => {
                      if (quantity < 10) {
                        dispatch(addValue(data));
                      }
                    }}
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
            You have no items in your shopping cart. <br />{" "}
            Let&apos;s go buy something
          </p>
          <Link to="/products" className="mt-6">
            <Button
              styles={
                "w-36 h-9 bg-black hover:bg-[var(--pry-col)] rounded-[8px] text-white [word-spacing:6px]"
              }
            >
              Start Shopping
            </Button>
          </Link>
        </aside>
      )}
    </>
  );
}

export default CartDisplay;
