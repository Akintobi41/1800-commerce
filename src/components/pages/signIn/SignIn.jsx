import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import authService from "../../../appwrite/auth/auth";
import {
  closeEntry,
  showEntry,
} from "../../../store/accountSlice";
import { signIn } from "../../../store/loginSlice";
import PopUp from "../../popup/PopUp";
import Button from "../../reusables/button/Button";
import Input from "../../reusables/input/Input";
import TextContainer from "../../textContainer/TextContainer";
import ViewPassword from "../../viewPassword/ViewPassword";
import CloseIcon from "../../../assets/Icons/CloseIcon";

function SignIn({ id }) {
  const { register, handleSubmit, formState } =
    useForm();
  const { isValid } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (data) => {
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
      <PopUp
        text={"Some fields are still empty/incorrect"}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <section className="bg-[var(--white)] max-w-[500px] h-[65%] flex flex-col absolute bottom-0 w-full p-4 transition-all duration-[1s] md:w-[45%] top-1/2 left-1/2 md:[transform:translate(-50%,-50%)] md:mx-auto md:my-0">
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
          className="flex flex-col gap-y-6 text-[.8rem] max-w-[500px] mx:auto"
        >
          <Input
            label="Email"
            styles="px-[12px]"
            type="email"
            {...register("email", { required: true })}
          />
          <Input
            label="Password"
            styles="px-[12px]"
            type={view ? "text" : "password"}
            {...register("password", { required: true })}
            icon={
              <ViewPassword
                onClick={() => setView(!view)}
                view={view}
              />
            }
          />

          <p className="text-[.8rem] text-[var(--red)] h-1 -mt-5 mb-3">
            {errors}
          </p>
          <Button
            type="submit"
            styles={`font-medium text-[var(--white)] bg-[var(--black)] w-[30%] rounded-[24px] h-[48px] px-[24px] hover:bg-[var(--pry-col)] transition-all duration-300 ${
              loading ? "opacity-70 " : "opacity-100"
            }`}
            onClick={() => setIsVisible(!isValid)}
          >
            {" "}
            {loading ? "Doing Things" : "Create Account"}
          </Button>
        </form>
        <p className="text-[.8rem] mt-4">
          Don&apos;t have an account?{" "}
          <small
            className="underline cursor-pointer"
            onClick={() => dispatch(showEntry(id))}
          >
            Create Account
          </small>
        </p>
      </section>
    </>
  );
}
export default SignIn;
