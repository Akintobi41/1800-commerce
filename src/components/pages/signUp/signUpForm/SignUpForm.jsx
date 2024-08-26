/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import authService from "../../../../appwrite/auth/auth";
import { closeEntry } from "../../../../store/accountSlice";
import { signIn } from "../../../../store/loginSlice";
import { msg, radioText, userMsg } from "../../../../utils/constants/constants";
import { validateEmail } from "../../../../utils/validate/emailValidate";
import Button from "../../../reusables/button/Button";
import Input from "../../../reusables/input/Input";
import SignUpInputs from "../signUpInputs/SignUpInputs";
import SignUpSelect from "../signUpInputs/SignUpSelect";


function SignUpForm({ formProp }) {
  const {
    birthday,
    errorMsg,
    setErrorMsg,
    register,
    formState,handleSubmit
  } = formProp;
    
    const { month, day } = birthday;
    const { isValid } = formState;
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (data) => {
    const checkMail = validateEmail(data.email);
    if (!checkMail)
      return setErrorMsg("Email address is invalid");
    setLoading(true);
    try {
      const userData = await authService.createAccount(
        data
      );
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(signIn({ userData }));
        dispatch(closeEntry());
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      const { message } = error;
      const errorText = message === msg;
      setErrorMsg(errorText ? userMsg : message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-6 text-[.8rem] mt-8"
    >
      <SignUpInputs
        formProp={formProp}
      />
      <section className="flex items-center">
        <Input
          type="checkbox"
          className="relative cursor-pointer flex justify-center items-center size-5 self-center rounded-[50%] appearance-none border-[2px] border-solid border-[var(--black)] checked:before:bg-[var(--pry-col)] before:transition-all before:duration-300  before:block before:absolute  before:content-[''] before:size-[.8rem] before:rounded-[50%] "
          {...register("signUp")}
        />{" "}
        <p className="m-1">{radioText}</p>
      </section>
      <SignUpSelect formProp={{ register, day, month }} />
      <p className="text-[.8rem] text-[var(--red)] h-1 -mt-5 mb-4">
        {errorMsg}
      </p>
      <Button
        type="submit"
        onClick={() => setIsVisible(!isValid)}
        styles={`font-medium text-[var(--white)] bg-[var(--black)] w-[8.5rem] sm:w-[35%] rounded-[24px] h-[30px] px-[24px] hover:bg-[var(--pry-col)] transition-all duration-300 ${
          loading ? "opacity-70 " : "opacity-100"
        }`}
        disabled={loading}
      >
        {loading ? "Doing Things" : "Create Account"}
      </Button>
    </form>
  );
}

export default SignUpForm;
