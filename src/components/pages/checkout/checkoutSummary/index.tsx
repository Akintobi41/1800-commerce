import LeftArrow from "@assets/icons/LeftArrow";
import CheckoutItems from "@components/pages/checkout/checkoutItems/CheckoutItems";
import { useAppSelector } from "@hooks/useAppStore";
import useCart from "@hooks/useCart/useCart";
import { productsData } from "@store/productSlice";
import { format } from "@utils/format/format";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
} from "react";

interface UserInfo {
  Name: string;
  Email: string;
  Address: string;
  City: string;
  Country: string;
}

interface CheckoutSummaryProps {
  children: ReactNode;
  userInfo: UserInfo;
  setNext: Dispatch<SetStateAction<boolean>>;
}

const CheckoutSummary: FC<CheckoutSummaryProps> = ({
  children,
  userInfo,
  setNext,
}) => {
  const cart = useAppSelector(productsData);
  const { cartTotal } = useCart(cart);
  const amount = cartTotal * 100;

  return (
    <section>
      <p
        className="text-sm cursor-pointer flex items-center max-w-screen-2xl mx-auto"
        onClick={() => setNext(false)}
      >
        {" "}
        <LeftArrow size="size-4" />
        <span className="ml-1">Back to Shipping</span>
      </p>
      <div>
        <div className="flex flex-col items-center max-w-lg mx-auto">
          <div className="w-full my-8">
            <p className="font-bold my-4">Order Details</p>
            <CheckoutItems />
            <div className="flex flex-col gap-2"></div>
          </div>
          <div className="mt-20 mb-8 max-w-lg mx-auto w-full">
            <p className="font-bold my-4">
              Customer Details
            </p>
            {Object.entries(userInfo).map(
              ([label, item]) => (
                <p key={label} className="text-sm my-2">
                  {`${label}: ${item || "N/A"}`}
                </p>
              )
            )}
            <p className="my-4 font-semibold text-sm">
              Total cost: NGN {format(amount / 100)}
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default CheckoutSummary;
