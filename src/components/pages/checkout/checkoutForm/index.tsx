import Button from "@components/reusables/button";
import Input from "@components/reusables/input";
import { useAppSelector } from "@hooks/useAppStore";
import { UserDetails } from "@src/tsTypes/react-types";
import { selectUserData } from "@store/loginSlice";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { useForm } from "react-hook-form";

interface CheckoutFormProps {
  submit: (details: UserDetails) => void;
  error: string | null;
  userData: UserDetails;
  setError: Dispatch<SetStateAction<string | null>>;
}

const CheckoutForm: FC<CheckoutFormProps> = ({
  submit,
  error,
  userData,
  setError,
}) => {
  const data = useAppSelector(selectUserData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: data?.name || "",
      email: data?.email || "",
      address: "",
      city: "",
      country: "Nigeria (NG) only",
      phoneNumber: "",
    },
  });
  const [success, setIsSuccessful] = useState("");

  const Wrapper = (children: ReactNode) => (
    <div className="h-2 -mt-4">{children}</div>
  );

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit(submit)}
      onChange={() => {
        setIsSuccessful("");
        setError("");
      }}
      className="flex flex-col gap-y-4 max-w-[400px] mx-auto"
    >
      <Input
        label="Name: "
        data-testid="name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters required",
          },
          maxLength: {
            value: 30,
            message:
              "should not be more than 30 characters",
          },
        })}
        border="border-b-[1px]"
        height="h-8"
        styles="text-sm px-2"
        placeholder="30 characters max -"
      />

      {Wrapper(
        errors.name && (
          <span className="text-xs text-red-500">
            {errors.name.message}
          </span>
        )
      )}

      <Input
        label="Email: "
        data-testid="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
          maxLength: {
            value: 30,
            message:
              "should not be more than 30 characters",
          },
        })}
        border="border-b-[1px]"
        height="h-8"
        styles="text-sm px-2"
      />
      {Wrapper(
        errors.email && (
          <span className="text-xs text-red-500">
            {errors.email.message}
          </span>
        )
      )}

      <Input
        label="Home Address: "
        data-testid="address"
        {...register("address", {
          required: "Address is required",
          maxLength: {
            value: 30,
            message:
              "should not be more than 30 characters",
          },
        })}
        border="border-b-[1px]"
        height="h-8"
        styles="text-sm px-2"
        placeholder="Enter your address"
      />
      {Wrapper(
        errors.address && (
          <span className="text-xs text-red-500">
            {errors.address.message}
          </span>
        )
      )}

      <Input
        label="City: "
        data-testid="city"
        {...register("city", {
          required: "City is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters required",
          },
          maxLength: {
            value: 10,
            message:
              "should not be more than 15 characters",
          },
        })}
        border="border-b-[1px]"
        height="h-8"
        styles="text-sm px-2"
        placeholder="Enter your city"
      />

      {Wrapper(
        errors.city && (
          <span className="text-xs text-red-500">
            {errors.city.message}
          </span>
        )
      )}

      <Input
        label="Phone Number: "
        data-testid="number"
        {...register("phoneNumber", {
          required: "Phone number is required",
          minLength: {
            value: 10,
            message: "Minimum 10 digits required",
          },
          pattern: {
            value: /^[0-9]+$/,
            message: "Only numbers are allowed",
          },
        })}
        border="border-b-[1px]"
        height="h-8"
        styles="text-sm px-2"
        placeholder="123-456-7890"
      />
      {Wrapper(
        errors.phoneNumber && (
          <span className="text-xs text-red-500">
            {errors.phoneNumber.message}
          </span>
        )
      )}

      <Button
        data-testid="checkout-btn"
        styles={`bg-[var(--black)] mt-4 text-[var(--white)] w-[8rem] h-[32px] rounded hover:bg-[var(--pry-col)] transition-colors duration-500`}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default CheckoutForm;
