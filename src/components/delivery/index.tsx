import { useAppSelector } from "@hooks/useAppStore";
import { cartData } from "@store/cartSlice";

function Delivery() {

  const cart = useAppSelector(cartData);
  
  return (
    <>
      {cart.length ? (
        <section className=" bg-[var(--white)] m-4 py-4 max-w-[400px] lg:max-w-[700px] mx-auto leading-8">
          <h2 className="font-bold text-[1.5rem] mb-6">
            Delivery Information
          </h2>
          Standard Delivery is{" "}
          <small className="font-bold text-[16px]">
            1-2 Working Days.
          </small>
          <br />
          <p className="font-bold">Need it faster? </p>
          You can upgrade to{" "}
          <small className="font-bold text-[16px]">
            Express Delivery
          </small>{" "}
          during Checkout. Order by 10pm Monday to Friday
          for Next Working Day Delivery.{" "}
          <small className="font-bold text-[16px]">
            {" "}
            Express Delivery is Monday to Friday, excluding
            public holidays.
          </small>{" "}
          <br /> <br />
          Any orders placed after the daily cut-off time
          will be will not be dispatched until the following
          day, excluding Public Holidays.
          <br />
          <br />
          FREE returns to any <b> 1800 Superstore</b> near you.
          <br />
          <br />
          Please note, some large items (such as bikes, doll
          houses, playhouses) will be delivered in their
          original packing which may display images or
          details of the contents.
        </section>
      ) : null}
    </>
  );
}

export default Delivery;
