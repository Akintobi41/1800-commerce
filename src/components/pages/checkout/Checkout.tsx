import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import useCart from "@hooks/useCart";
import usePaystack from "@hooks/usePaystack";
import { format } from "@utils/format/format";
import { validateEmail } from "@utils/validate/emailValidate";
import LeftArrow from "@icons/LeftArrow";
import CheckoutForm from "./checkoutForm/CheckoutForm";
import CheckoutItems from "./checkoutItems/CheckoutItems";

function Checkout() {

  const userData = useSelector(
    (state) => state.auth.userData
  );
  const cart = useSelector((state) => state.cart.products);
  const [next, setNext] = useState(false);
  const [errors, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
  });
  const [submit, setSubmit] = useState(false);
  const { cartTotal } = useCart(cart);
  const amount = cartTotal * 100;

  const handleFormSubmit = ({
    name,
    email,
    phoneNumber,
    address,
    city,
    country,
  }) => {
    setErrors(false);
    setSubmit(false);
    setUserDetails({
      name,
      email,
      phone: phoneNumber,
      city,
      country,
      address,
    });

    if (/[^\d]/g.test(phoneNumber))
      return setErrorMessage("Phone Number is invalid");

    const checkMail = validateEmail(email);

    if (!checkMail)
      return setErrorMessage("Email address is invalid");

    setNext(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { approved, publicKey } = usePaystack();
  const { name, email, phone, city, country, address } =
    userDetails;

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
  };

  return (
    <section className="mt-24 p-4 min-h-[500px]">
      {!next ? (
        <>
          <p className="font-bold text-center lg:text-[25px] mb-20 mt-8">
            Shipping Address
          </p>

          <CheckoutForm
            formProps={{
              handleFormSubmit,
              submit,
              setErrors,
              userData,
              errorMessage,
              setErrorMessage,
            }}
          />
        </>
      ) : (
        <section>
          <p
            className="text-sm cursor-pointer flex items-center"
            onClick={() => setNext(false)}
          >
            {" "}
            <LeftArrow size="size-4" />
            <span className="ml-1">Back to Shipping</span>
          </p>
          <div>
            <div className="flex flex-col items-center max-w-[500px] mx-auto">
              <div className="w-full my-8">
                <p className="font-bold my-4">
                  Order Details
                </p>
                <CheckoutItems />
                <div className="flex flex-col gap-2"></div>
              </div>
              <div className="mt-20 mb-8 max-w-[500px] mx-auto w-full">
                <p className="font-bold my-4">
                  Customer Details
                </p>
                {[
                  ["Name", name],
                  ["Email", email],
                  ["Address", address],
                  ["City", city],
                  ["Country", country],
                ].map(([label, item]) => (
                  <p key={item} className="text-sm my-2">
                    {`${[label]} : ${item}`}
                  </p>
                ))}
                <p className="my-4 font-semibold text-sm">
                  Total cost: NGN {format(amount / 100)}
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
