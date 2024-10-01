import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import authService from "@appwrite/auth/auth";
import CloseIcon from "@assets/icons/CloseIcon";
import Button from "@components/reusables/button";
import Input from "@components/reusables/input";
import TextContainer from "@components/textContainer";
import ViewPassword from "@components/viewPassword/ViewPassword";
import { closeEntry } from "@store/accountSlice";
import { signIn } from "@store/loginSlice";
import { msg2, msg3, userMsg2, userMsg3 } from "@utils/constants";
import { validateEmail } from "@utils/validate/emailValidate";

interface SignInFormData {
  name:string
  email: string;
  password: string;
}

const SignIn: FC<{ submit?: (data: SignInFormData) => void }> = ({ submit }) => {
  const { register, handleSubmit, formState } = useForm<SignInFormData>();
  const { isValid } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [success, setIsSuccessful] = useState<boolean>(false);

  const messageMap: Record<string, string> = {
    [msg2]: userMsg2,
    [msg3]: userMsg3,
  };

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    const checkMail = validateEmail(data.email);

    if (!checkMail) {
      return setErrors("Email address is invalid");
    }

    setLoading(true);
    
    try {
      const user = await authService.login(data);
      if (user) {
        dispatch(signIn({ userData: data }));
        dispatch(closeEntry());
        navigate("/");
      }
    } catch (error: any) {
      const { message } = error;
      setErrors(messageMap[message] || message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[var(--white)] lg:max-w-lg lg:mx-auto h-[500px] md:h-[62%] flex flex-col absolute bottom-0 w-full p-6 transition-all duration-[1s] md:w-[55%] md:top-1/2 md:left-1/2 md:[transform:translate(-50%,-50%)] md:mx-auto md:my-0">
      <CloseIcon
        className="absolute right-1 top-2 cursor-pointer"
        onClick={() => dispatch(closeEntry())}
      />
      <TextContainer className="text-center">Sign In</TextContainer>
      <p className="text-center my-5">
        Sign in to access your account or add items to your cart.
      </p>

      <form
        data-testid="login-form"
        onSubmit={handleSubmit(submit || onSubmit)}
        onChange={() => {
          setIsSuccessful(false);
          setErrors("");
        }}
        className="flex flex-col gap-y-4 text-sm max-w-lg mt-4 mx-auto w-full"
      >
        <Input
          label="Email"
          styles="px-[12px]"
          type="email"
          placeholder="name@example.com"
          {...register("email", { required: true })}
        />
        <Input
          label="Password"
          styles="px-[12px]"
          type={viewPassword ? "text" : "password"}
          placeholder="minimum of 8 characters please"
          minLength={8}
          maxLength={256}
          {...register("password", { required: true })}
          icon={<ViewPassword onClick={() => setViewPassword(!viewPassword)} view={viewPassword} />}
        />

        <p className="text-xs text-[var(--red)] h-1 -mt-3 mb-3">
          {success ? "Some fields are still empty/incorrect" : errors}
        </p>
        <Button
          type="submit"
          data-testid="submit-btn"
          styles={`font-medium text-[var(--white)] bg-[var(--black)] w-[9rem] rounded-[24px] h-[32px] px-[24px] hover:bg-[var(--pry-col)] transition-all duration-300 ${
            loading ? "opacity-70 " : "opacity-100"
          }`}
          onClick={() => !isValid && setIsSuccessful(true)}
        >
          {loading ? "Doing Things" : "Sign In"}
        </Button>
        <p className="text-sm">
          Don't have an account?{" "}
          <small
            className="underline cursor-pointer"
            onClick={() => {
              dispatch(closeEntry());
              navigate("/signup");
            }}
          >
            Create Account
          </small>
        </p>
      </form>
    </section>
  );
};

export default SignIn;
