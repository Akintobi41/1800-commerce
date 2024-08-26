import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../reusables/input/Input";

function CheckoutForm({
  handleFormSubmit,
  Button,
  data,
  successful,
  setSuccessfulText,
}) {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: data?.name || "",
      email: data?.email || "",
    },
  });
  const { isValid } = formState;
  const [success, setIsSuccessful] = useState("");

  return (
    <form
      action=""
      onSubmit={handleSubmit(handleFormSubmit)}
      onChange={() => {
        setIsSuccessful("");
        setSuccessfulText(false);
      }}
      className="flex flex-col gap-y-4 max-w-[700px] mx-auto"
    >
      <Input
        label="Name: "
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
        {...register("email", { required: true })}
        border="border-b-[1px]"
        styles="text-sm px-2"
        height="h-8"
      />
      <Input
        label="Home Address"
        {...register("address", { required: true })}
        border="border-b-[1px]"
        styles="text-sm px-2"
        height="h-8"
        maxLength="30"
        placeholder="30 characters max -"
      />
      <Input
        label="City"
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
      <p className="text-sm text-[var(--red)] h-2 -mt-3 mb-3">
        {success || successful
          ? "Some fields are still empty/incorrect"
          : null}
      </p>
      {Button}
    </form>
  );
}

export default CheckoutForm;
