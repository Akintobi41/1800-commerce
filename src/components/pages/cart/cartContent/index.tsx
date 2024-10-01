import Button from "@components/reusables/button";
import {
  useAppDispatch,
  useAppSelector,
} from "@hooks/useAppStore";
import useCart from "@hooks/useCart/useCart";
import { showEntry } from "@store/accountSlice";
import { cartData } from "@store/cartSlice";
import { format } from "@utils/format/format";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { totalValues } from "../u_cart";
import { selectAuthStatus } from "@store/loginSlice";

interface CartContentProps {
  onCheckout?: () => void;
}

const CartContent: React.FC<CartContentProps> = ({
  onCheckout,
}) => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector(cartData);
  const { cartText, total, VAT, shipFee, cartTotal } =
    useCart(cart);
  const navigate = useNavigate();
 
  const isAuthenticated = useAppSelector(selectAuthStatus)

  const handleCheckout: () => void = onCheckout
    ? onCheckout
    : () => {
        if (isAuthenticated) {
          navigate("/cart/checkout");
        } else {
          dispatch(showEntry(4)); // Show login modal if not logged in
        }
      };

  return (
    <div className="w-full flex flex-col gap-y-2 border-[#808080] border-b-[1px] pb-4">
      <p className="hidden md:block text-[2rem] font-semibold">
        Order Summary
      </p>
      {cartText.map((item) => (
        <section
          key={item}
          className="w-full flex justify-between"
        >
          <p>{item}</p>
          <p>
            &#8358; {totalValues(item, shipFee, total, VAT)}
          </p>
        </section>
      ))}
      <section className="w-full flex justify-between mt-4 border-[#808080] border-b-[1px] pb-4">
        <p className="font-medium">Total</p>
        <p data-testid="total" className="font-medium">
          &#8358; {format(cartTotal)}
        </p>
      </section>
      <Button
        data-testid="checkout"
        styles="mt-8 bg-[var(--black)] text-[var(--white)] active:opacity-50 hover:bg-[var(--pry-col)] rounded-[30px] h-[32px] px-[2rem]"
        onClick={handleCheckout}
        aria-label="Proceed to Checkout" 
      >
        Checkout
      </Button>
      <p className="text-left leading-[1.5] mt-8">
        Please double check your delivery address details to
        ensure they are correct on the payment pop up.
        <br />
        <br />
        By placing the order, I have read and agreed to the
        Terms & Conditions and Privacy Policy.
      </p>
    </div>
  );
};

export default CartContent;
