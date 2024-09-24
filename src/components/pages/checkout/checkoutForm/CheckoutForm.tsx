import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@reusables/button/Button";
import Input from "@reusables/input/Input";

function CheckoutForm({ formProps }) {
  const {
    userData,
    handleFormSubmit,
    setErrorMessage,
    errorMessage,
    submit,
    setErrors,
  } = formProps;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: userData?.name || "",
      email: userData?.email || "",
    },
  });
  const [success, setIsSuccessful] = useState("");

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      onChange={() => {
        setIsSuccessful("");
        setErrorMessage("");
      }}
      className="flex flex-col gap-y-4 max-w-[400px] mx-auto"
    >
      <Input
        label="Name: "
        data-testid="name"
        {...register("name", {
          required: true,
        })}
        minLength="3"
        border="border-b-[1px]"
        height="h-8"
        styles="text-sm px-2"
        maxLength="30"
        placeholder="30 characters max -"
      />
      <Input
        label="Email"
        data-testid="email"
        {...register("email", { required: true })}
        border="border-b-[1px]"
        styles="text-sm px-2"
        height="h-8"
      />
      <Input
        label="Home Address"
        data-testid="address"
        {...register("address", { required: true })}
        border="border-b-[1px]"
        styles="text-sm px-2"
        height="h-8"
        maxLength="30"
        placeholder="30 characters max -"
      />
      <Input
        label="City"
        data-testid="city"
        {...register("city", {
          required: true,
          min: 3,
        })}
        minLength="3"
        border="border-b-[1px]"
        styles="text-sm px-2"
        height="h-8"
        placeholder="15 characters max -"
        maxLength="15"
      />
      <Input
        label="State"
        data-testid="state"
        {...register("state", {
          required: true,
          min: 3,
        })}
        minLength="3"
        border="border-b-[1px]"
        styles="text-sm px-2"
        height="h-8"
        maxLength="15"
        placeholder="15 characters max -"
      />
      <Input
        label="Country"
        data-testid="country"
        value="Nigeria (NG) only"
        {...register("country", {
          required: true,
          min: 3,
        })}
        minLength="3"
        border="border-b-[1px]"
        styles="text-sm px-2"
        height="h-8"
        maxLength="15"
        placeholder="15 characters max -"
      />
      <Input
        label="PhoneNumber"
        data-testid="number"
        type="text"
        {...register(
          "phoneNumber",
          {
            required: true,
          },
          {
            validate: (val) => isNaN(val),
          }
        )}
        minLength="10"
        maxLength="15"
        border="border-b-[1px]"
        styles="text-sm px-2"
        height="h-8"
        placeholder="123-456-789 "
      />
      <p className="text-xs text-[var(--red)] h-2 -mt-3 mb-3">
        {success || errorMessage ? errorMessage : null}
      </p>
      <Button
        data-testid="checkout-btn"
        styles={`bg-[var(--black)] text-[var(--white)] w-[8rem] h-[32px] rounded hover:bg-[var(--pry-col)] transition-colors duration-500 ${
          submit ? "opacity-40" : null
        }`}
        onClick={() => setErrors(true)}
      >
        {!submit ? "Submit" : "Doing Things"}{" "}
      </Button>
    </form>
  );
}

export default CheckoutForm;
