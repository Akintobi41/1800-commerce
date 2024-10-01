import Input from "@components/reusables/input";
import ViewPassword from "@components/viewPassword/ViewPassword";
import { useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface SignUpInputsProps {
  formProp: {
    pvalid?: string;           
    pword?: boolean;          
    lName?: boolean;
    fName?: boolean;          
    watch: (field: string) => any; 
    register: UseFormRegister<FieldValues>; 
  };
}

const SignUpInputs: React.FC<SignUpInputsProps> = ({ formProp }) => {
  const { pvalid, pword, lName, fName, watch, register } = formProp;
  const [view1, setView1] = useState<boolean>(false);
  const [view2, setView2] = useState<boolean>(false);

  return (
    <>
      <Input
        label="First Name"
        type="text"
        styles={`px-[12px] ${fName ? "rounded border-[1px] border-[red]" : ""}`}
        {...register("name", {
          required: true,
          maxLength: 20,
        })}
        placeholder="Name should not be more than 20 characters"
      />
      <Input
        label="Last Name"
        type="text"
        styles={`px-[12px] ${lName ? "rounded border-[1px] border-[red]" : ""}`}
        {...register("lastName", {
          required: true,
          maxLength: 20,
        })}
        placeholder="Name should not be more than 20 characters"
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
          type={view1 ? "text" : "password"}
          styles="relative px-[12px]"
          placeholder="Enter password (8-15 characters)"
          {...register("password", { required: true })}
          icon={<ViewPassword onClick={() => setView1(!view1)} view={view1} />}
          maxLength={15}
        />
      </section>
      <p className="h-2 -mt-6 text-red-600">{pvalid}</p>
      <Input
        label="Confirm Password"
        styles="px-[12px]"
        type={view2 ? "text" : "password"}
        placeholder="Enter password (8-15 characters)"
        {...register("cpassword", {
          required: true,
          validate: (val) => {
            if (watch("password") !== val) {
              return "Your passwords do not match";
            }
          },
        })}
        icon={<ViewPassword onClick={() => setView2(!view2)} view={view2} />}
        maxLength={15}
      />
      {pword && <p className="-mt-6 h-2 text-red-600">Passwords do not match</p>}
    </>
  );
};

export default SignUpInputs;
