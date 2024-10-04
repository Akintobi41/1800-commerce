import CheckoutSummary from "@components/pages/checkout/checkoutSummary";
import { useAppSelector } from "@hooks/useAppStore";
import useCart from "@hooks/useCart/useCart";
import usePaystack from "@hooks/usePaystack/usePaystack";
import { UserDetails } from "@src/tsTypes/react-types";
import { selectUserData } from "@store/loginSlice";
import { productsData } from "@store/productSlice";
import { validateEmail } from "@utils/validate/emailValidate";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import CheckoutForm from "./checkoutForm";

interface CheckoutProps {
  approved: () => void;
  publicKey: string;
}

function Checkout() {
  const userData = useAppSelector(selectUserData);
  const cart = useAppSelector(productsData);
  const { cartTotal } = useCart(cart);
  const amount = cartTotal * 10;
  const { approved, publicKey } = usePaystack();

  const [next, setNext] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<UserDetails>({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    country: "",
    city: "",
  });
  const [submit, setSubmit] = useState(false);
  const [step, setStep] = useState<"address" | "summary">("address");

  const handleFormSubmit = (data: UserDetails) => {
    setError(null);

    if (validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }
    if (/[^\d]/g.test(phoneNumber)) {
      setError("Invalid phone number.");
      return;
    }
    setFormData(data);
    setNext(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { name, email, phoneNumber, city, country, address } = formData;

  const userInfo = {
    Name: name,
    Email: email,
    Address: address,
    City: city,
    Country: country,
  };

  return (
    <section className="mt-24 p-4 min-h-[500px]">
      {!next ? (
        <>
          <p className="font-bold text-center lg:text-[25px] mb-20 mt-8">
            Shipping Address
          </p>

          <CheckoutForm
            submit={handleFormSubmit}
            error={error}
            userData={formData}
            setError={setError}
          />
        </>
      ) : (
        <CheckoutSummary userInfo={userInfo} setNext={setNext}>
          <PaystackButton
            email={email}
            amount={amount}
            metadata={{
              name,
              phoneNumber,
              custom_fields: [],
            }}
            publicKey={publicKey}
            text="Pay Now"
            onSuccess={approved}
            className="bg-[var(--black)] text-[var(--white)] w-[8rem] h-[32px] rounded hover:bg-[var(--pry-col)] transition-colors duration-500"
          />
        </CheckoutSummary>
      )}
    </section>
  );
}
export default Checkout;
