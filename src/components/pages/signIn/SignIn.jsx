import authService from "@appwrite/auth/auth";
import TextContainer from "@components/textContainer/TextContainer";
import ViewPassword from "@components/viewPassword/ViewPassword";
import CloseIcon from "@icons/CloseIcon";
import Button from "@reusables/button/Button";
import Input from "@reusables/input/Input";
import { closeEntry } from "@store/accountSlice";
import { signIn } from "@store/loginSlice";
import {
  msg2,
  msg3,
  userMsg2,
  userMsg3,
} from "@utils/constants/constants";
import { validateEmail } from "@utils/validate/emailValidate";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function SignIn({ submit }) {
  const { register, handleSubmit, formState } = useForm();
  const { isValid } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(false);
  const [success, setIsSuccessful] = useState(false);

  const messageMap = {
    [msg2]: userMsg2,
    [msg3]: userMsg3,
  };

  const onSubmit = submit
    ? submit
    : async (data) => {
        const checkMail = validateEmail(data.email);

        if (!checkMail)
          return setErrors("Email address is invalid");
        setLoading(true);
        const userData = data;

        try {
          const user = await authService.login({
            ...userData,
          });
          if (user) {
            dispatch(signIn({ userData }));
            dispatch(closeEntry());
            setLoading(false);
            navigate("/");
          }
        } catch (error) {
          const { message } = error;
          setErrors(messageMap[message] || message);
          setLoading(false);
        }
      };

  return (
    <>
      <section className="bg-[var(--white)] lg:max-w-[500px] lg:mx-auto h-[500px] md:h-[62%] flex flex-col absolute bottom-0  w-full p-6 transition-all duration-[1s] md:w-[55%] md:top-1/2 md:left-1/2 md:[transform:translate(-50%,-50%)] md:mx-auto md:my-0">
        <CloseIcon
          className={
            "absolute right-1 top-2 cursor-pointer"
          }
          onClick={() => dispatch(closeEntry())}
        />
        <TextContainer className={"text-center"}>
          Sign In
        </TextContainer>
        <p className="text-center my-5">
          Sign in to access your account or add items to
          your cart.
        </p>

        <form
          data-testid="login-form"
          onSubmit={handleSubmit(onSubmit)}
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
            type={view ? "text" : "password"}
            placeholder="minimum of 8 characters please"
            minLength="8"
            maxLength="256"
            {...register("password", { required: true })}
            icon={
              <ViewPassword
                onClick={() => setView(!view)}
                view={view}
              />
            }
          />

          <p className="text-xs text-[var(--red)] h-1 -mt-3 mb-3">
            {success
              ? "Some fields are still empty/incorrect"
              : errors}
          </p>
          <Button
            type="submit"
            data-testid="submit-btn"
            styles={`font-medium text-[var(--white)] bg-[var(--black)] w-[9rem] rounded-[24px] h-[32px] px-[24px] hover:bg-[var(--pry-col)] transition-all duration-300 ${
              loading ? "opacity-70 " : "opacity-100"
            }`}
            onClick={() =>
              !isValid ? setIsSuccessful(true) : null
            }
          >
            {" "}
            {loading ? "Doing Things" : "Sign In"}
          </Button>
          <p className="text-sm">
            Don&apos;t have an account?{" "}
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
    </>
  );
}
export default SignIn;
