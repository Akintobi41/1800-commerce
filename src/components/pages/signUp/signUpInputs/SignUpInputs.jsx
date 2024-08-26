import { useState } from "react";
import Input from "../../../reusables/input/Input";
import ViewPassword from "../../../viewPassword/ViewPassword";

function SignUpInputs({ formProp }) {
  const { pvalid, pword, lName, fName, watch, register } =
    formProp;
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);

  return (
    <>
      <Input
        label="First Name"
        type="text"
        styles={`px-[12px] ${
          fName ? "rounded border-[1px] border-[red]" : ""
        }`}
        {...register("name", {
          required: true,
          maxLength: 20,
        })}
        placeholder="name should not be more than 20 characters"
      />
      <Input
        label="Last Name"
        type="text"
        styles={`px-[12px] ${
          lName ? "rounded border-[1px] border-[red]" : ""
        }`}
        {...register("lastName", {
          required: true,
          maxLength: 20,
        })}
        placeholder="name should not be more than 20 characters"
      />
      <Input
        label="Email"
        type="email"
        styles="px-[12px]"
        placeholder="name@example.com"
        {...register("email", { required: true })}
      />
      <section>
        <Input
          label="Password"
          type={!view1 ? "password" : "text"}
          styles="relative px-[12px]"
          placeholder="Enter password (8-15 characters)"
          {...register("password", { required: true })}
          icon={
            <ViewPassword
              onClick={() => setView1(!view1)}
              view={view1}
            />
          }
        maxLength='15'
        />
      </section>
      <p className="h-2 -mt-6 text-red-600">{pvalid}</p>
      <Input
        label="Confirm Password"
        styles="px-[12px]"
        type={!view2 ? "password" : "text"}
        placeholder="Enter password (8-15 characters)"
        {...register("cpassword", {
          required: true,
          validate: (val) => {
            if (watch("password") != val) {
              return "Your passwords do no match";
            }
          },
        })}
        icon={
          <ViewPassword
            onClick={() => setView2(!view2)}
            view={view2}
          />
        }
        maxLength='15'
      />
      {
        <p className="-mt-6 h-2 text-red-600">
          {pword && "Passwords do not match"}
        </p>
      }
    </>
  );
}

export default SignUpInputs;
