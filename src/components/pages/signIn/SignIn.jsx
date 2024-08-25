import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import authService from "../../../appwrite/auth/auth";
import CloseIcon from "../../../assets/Icons/CloseIcon";
import {
  closeEntry
} from "../../../store/accountSlice";
import { signIn } from "../../../store/loginSlice";
import { validateEmail } from "../../../utils/validate/emailValidate";
import Button from "../../reusables/button/Button";
import Input from "../../reusables/input/Input";
import TextContainer from "../../textContainer/TextContainer";
import ViewPassword from "../../viewPassword/ViewPassword";

function SignIn({ id }) {
  const { register, handleSubmit, formState } = useForm();
  const { isValid } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(false);
  const [success, setIsSuccessful] = useState(false);

  const onSubmit = async (data) => {
    const checkMail = validateEmail(data.email);
    if (!checkMail)
      return setErrors("Email address is invalid");
    setLoading(true);
    const userData = data;
    try {
      const user = await authService.login({ ...userData });
      if (user) {
        dispatch(signIn({ userData }));
        dispatch(closeEntry());
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setErrors(error.message);
    }
  };
  return (
    <>
      <section className="bg-[var(--white)] lg:max-w-[500px] lg:mx-auto h-[60%] flex flex-col absolute bottom-0 w-full p-4 transition-all duration-[1s] md:w-[45%] md:top-1/2 md:left-1/2 md:[transform:translate(-50%,-50%)] md:mx-auto md:my-0">
        <CloseIcon
          className={
            "absolute right-1 top-2 cursor-pointer"
          }
          onClick={() => dispatch(closeEntry())}
        />
        <TextContainer className={"text-center"}>
          Sign In
        </TextContainer>
        <p className="text-center">
          Sign in to access your account or add items to
          your cart.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => {
            setIsSuccessful(false);
            setErrors("");
          }}
          className="flex flex-col gap-y-6 text-[.8rem] max-w-[500px] mx:auto mt-8"
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

          <p className="text-[.8rem] text-[var(--red)] h-1 -mt-5 mb-3">
            {success
              ? "Some fields are still empty/incorrect"
              : errors}
          </p>
          <Button
            type="submit"
            styles={`font-medium text-[var(--white)] bg-[var(--black)] w-[8.5rem] rounded-[24px] h-[28px] px-[24px] hover:bg-[var(--pry-col)] transition-all duration-300 ${
              loading ? "opacity-70 " : "opacity-100"
            }`}
            onClick={() =>
              !isValid ? setIsSuccessful(true) : null
            }
          >
            {" "}
            {loading ? "Doing Things" : "Sign In"}
          </Button>
        </form>
        <p className="text-[.8rem] mt-4">
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
      </section>
    </>
  );
}
export default SignIn;
