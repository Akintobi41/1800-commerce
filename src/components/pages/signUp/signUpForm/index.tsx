import React, { useState } from "react";
import authService from "@appwrite/auth/auth";
import Button from "@components/reusables/button";
import Input from "@components/reusables/input";
import { closeEntry } from "@store/accountSlice";
import { signIn } from "@store/loginSlice";
import { messageMap, radioText } from "@utils/constants";
import { validateEmail } from "@utils/validate/emailValidate";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import SignUpInputs from "../signUpInputs/SignUpInputs";
import SignUpSelect from "../signUpInputs/SignUpSelect";

interface SignUpFormProps {
  formProp: {
    birthday: {
      month: string[];
      day: number[];
    };
    errorMsg: string;
    setErrorMsg: (msg: string) => void;
    register: (name: string, options?: any) => any;
    formState: {
      isValid: boolean;
    };
    handleSubmit: (callback: (data: any) => Promise<void>) => (e?: React.FormEvent<HTMLFormElement>) => void;
    watch: (field: string) => any; 
  };
}

const SignUpForm: React.FC<SignUpFormProps> = ({ formProp }) => {
  const {
    birthday,
    errorMsg,
    setErrorMsg,
    register,
    formState,
    handleSubmit,
  } = formProp;

  const { month, day } = birthday;
  const { isValid } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    const checkMail = validateEmail(data.email);

    if (!checkMail) {
      return setErrorMsg("Email address is invalid");
    }

    setLoading(true);

    try {
      const userData = await authService.createAccount(data);

      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          dispatch(signIn({ userData: currentUser }));
        }
        dispatch(closeEntry());
        navigate("/");
      }
    } catch (error: any) {
      const { message } = error;
      setErrorMsg(messageMap[message] || message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-6 text-sm mt-8"
    >
      <SignUpInputs formProp={formProp} />
      <section className="flex items-center">
        <Input
          type="checkbox"
          className="relative cursor-pointer flex justify-center items-center size-5 self-center rounded-[50%] appearance-none border-[2px] border-solid border-[var(--black)] checked:before:bg-[var(--pry-col)] before:transition-all before:duration-300  before:block before:absolute  before:content-[''] before:size-[.8rem] before:rounded-[50%]"
          {...register("signUp")}
        />
        <p className="m-1">{radioText}</p>
      </section>
      <SignUpSelect formProp={{ register, day, month }} />
      <p className="text-sm text-[var(--red)] h-1 -mt-5 mb-4">{errorMsg}</p>
      <Button
        type="submit"
        onClick={() => setIsVisible(!isValid)}
        styles={`font-medium text-[var(--white)] bg-[var(--black)] w-[9rem] sm:w-[35%] rounded-[24px] h-[32px] px-[24px] hover:bg-[var(--pry-col)] transition-all duration-300 ${
          loading ? "opacity-70" : "opacity-100"
        }`}
        disabled={loading}
      >
        {loading ? "Doing Things" : "Create Account"}
      </Button>
    </form>
  );
};

export default SignUpForm;
