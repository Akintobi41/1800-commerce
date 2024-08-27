import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LeftArrow from "./../../../assets/Icons/LeftArrow";
import CartContent from "./cartContent/CartContent";
import CartDisplay from "./CartDisplay/CartDisplay";
import Delivery from './../../delivery/Delivery';

const Cart = () => {
  const cart = useSelector((state) => state.cart.products);

  return (
    <div
      data-testid="cart"
      className="mt-24 px-4 max-w-[1500px] md:mx-auto w-full"
    >
      <Link
        to="/products"
        className="flex items-center gap-x-1 cursor-pointer mx-4"
      >
        {" "}
        <LeftArrow size="size-4" />
        <section className="text-sm font-medium px-1">
          Continue Shopping
        </section>
      </Link>
      <h2 className="font-bold p-4 text-[24px][">
        {cart.length ? "Your Basket" : null}
      </h2>
      <section className="flex flex-col w-full mx-auto max-w-[400px] md:max-w-[1150px] md:px-4 py-2 md:gap-x-10 md:mx-auto bg-[var(--white)] min-h-[400px] md:flex-row">
        <section
          className={`md:h-[65%] ${
            cart.length ? "md:w-[55%]" : "md:w-full"
          } max-h-[500px] overflow-y-auto p-1`}
        >
          <CartDisplay />{" "}
        </section>

        {cart.length ? (
          <section className="md:w-[47%] px-0">
            <CartContent />{" "}
          </section>
        ) : null}
      </section>
      <Delivery />
    </div>
  );
};

export default Cart;
