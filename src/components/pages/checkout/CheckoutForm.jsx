import { useForm } from "react-hook-form";
import Input from "../../reusables/input/Input";

function CheckoutForm({ shipProduct, Button }) {
  const { register, handleSubmit } = useForm();
  return (
    <form
      action=""
      onSubmit={handleSubmit(shipProduct)}
      className="flex flex-col gap-y-4 max-w-[700px] mx-auto"
    >
      <Input
        label="Full Name: "
        {...register("name", {
          required: true,
          maxLength: 30,
        })}
        minLength="3"
        border="border-b-[1px]"
        height="h-8"
        styles="text-[.8rem] px-2"
      />
      <Input
        label="Email"
        {...register("email", { required: true })}
        border="border-b-[1px]"
        styles="text-[.8rem] px-2"
        height="h-8"
      />
      <Input
        label="Home Address"
        {...register("address", { required: true })}
        border="border-b-[1px]"
        styles="text-[.8rem] px-2"
        height="h-8"
      />
      <Input
        label="City"
        {...register("city", {
          required: true,
          min: 3,
        })}
        minLength="3"
        border="border-b-[1px]"
        styles="text-[.8rem] px-2"
        height="h-8"
      />
      <Input
        label="State"
        {...register("state", {
          required: true,
          min: 3,
        })}
        minLength="3"
        border="border-b-[1px]"
        styles="text-[.8rem] px-2"
        height="h-8"
      />
      <Input
        label="Country"
        {...register("country", {
          required: true,
          min: 3,
        })}
        minLength="3"
        border="border-b-[1px]"
        styles="text-[.8rem] px-2"
        height="h-8"
      />
      <Input
        label="PhoneNumber"
        {...register("phoneNumber", {
          required: true,
        })}
        minLength="10"
        maxLength="15"
        border="border-b-[1px]"
        styles="text-[.8rem] px-2"
        height="h-8"
      />

      {Button}
    </form>
  );
}

export default CheckoutForm;
