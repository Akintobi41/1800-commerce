import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import useCart from "../../../hooks/useCart";
import usePaystack from "../../../hooks/usePaystack";
import { format } from "../../../utils/format/format";
import Button from "../../reusables/button/Button";
import PopUp from "./../../popup/PopUp";
import CheckoutForm from "./CheckoutForm";

function Checkout() {
  const cart = useSelector((state) => state.cart.products);
  const [next, setNext] = useState(false);
  const [errors, setErrors] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);
  const [phone, setPhone] = useState("");
  const { cartTotal } = useCart(cart);
  const amount = cartTotal * 100;

  const shipProduct = ({ name, email, phoneNumber }) => {
    setErrors(false);
    setSubmit(false);
    setName(name);
    setEmail(email);
    setPhone(phoneNumber);
    setNext(true);
  };

  const { approved, publicKey } = usePaystack();

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => approved(),
    onClose: () => close(),
  };

  return (
    <section className="mt-28 p-4 min-h-[500px]">
      <PopUp
        text="Some fields are empty/ incorrect"
        isVisible={errors}
        setIsVisible={setErrors}
      />
      {!next ? (
        <>
          <p className="font-bold text-center lg:text-[25px] mb-4">
            Shipping Address
          </p>

          <CheckoutForm
            shipProduct={shipProduct}
            Button={
              <Button
                styles={`bg-[var(--black)] text-[var(--white)] w-[8rem] rounded hover:bg-[var(--pry-col)] transition-colors duration-500 ${
                  submit ? "opacity-40" : ""
                }`}
                onClick={() => setErrors(true)}
              >
                {!submit ? "Submit" : "Doing Things"}{" "}
              </Button>
            }
          />
        </>
      ) : (
        <section>
          <div>
            <div className="max-w-[1500px] mx-auto">
              <div className>
                <p
                  className="text-[.8rem] cursor-pointer"
                  onClick={() => setNext(false)}
                >
                  {" "}
                  Back to Shipping
                </p>
                <p className="font-bold my-4">
                  Order Details
                </p>
                {cart.map((item) => (
                  <section
                    className="flex gap-x-2"
                    key={item.name}
                  >
                    <p>{item.name + " " + item.type} </p>{" "}
                    <p className="font-semibold">
                      X{item.quantity}
                    </p>
                  </section>
                ))}
                <div className="flex flex-col gap-2"></div>
              </div>
              <div className="mt-4">
                <div className="checkout-field">
                  <p>{name}</p>
                </div>
                <div className="checkout-field">
                  <p>{email}</p>
                </div>
                <div className="checkout-field">
                  <label>{phone}</label>
                </div>
                <p className="mb-4">
                  NGN {format(amount / 100)}
                </p>
              </div>
              <PaystackButton
                {...componentProps}
                className="mt-4 w-[7rem] rounded bg-[var(--black)] text-[var(--white)] hover:bg-[var(--pry-col)]"
              />
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
export default Checkout;
