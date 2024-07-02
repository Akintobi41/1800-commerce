import { useSelector } from "react-redux";
import useCart from "../../../hooks/useCart";
import Button from "../../reusables/button/Button";
import { totalValues } from "./u_cart";

function CartContent() {
  const cart = useSelector((state) => state.account.products);
  const { cartText, total, VAT, shipFee, cartTotal } =
    useCart(cart);

  return (
    <>
      {cart.length ? (
        <>
          <div className="w-full flex flex-col mt-4 gap-y-2 border-[#808080] border-b-[1px] pb-4">
            {cartText.map((item) => (
              <section
                key={item}
                className="w-full flex justify-between"
              >
                <p>{item}</p>
                <p>
                  &#8358;{" "}
                  {totalValues(item, shipFee, total, VAT)}
                </p>
              </section>
            ))}
          </div>
          <>
            {" "}
            <section className="w-full flex justify-between mt-4 border-[#808080] border-b-[1px] pb-4">
              <p className="font-medium">Total</p>
              <p className="font-medium">
                &#8358; {cartTotal}
              </p>
            </section>
            <Button styles={"mt-8 bg-[var(--pry-col)] rounded-[30px] p-[.6rem]"}>
            Checkout
            </Button>
            <p className="text-left leading-[1.5] mt-8">
              Please double check your delivery address
              details to ensure they are correct on the
              payment pop up.
              <br />
              <br />
              By placing the order, I have read and agreed
              to the Terms & Conditions and Privacy Policy.
            </p>
          </>
        </>
      ) : null}
    </>
  );
}

export default CartContent;
