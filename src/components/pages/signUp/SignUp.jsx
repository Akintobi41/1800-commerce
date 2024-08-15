import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import authService from "../../../appwrite/auth/auth";
import {
  closeEntry,
  showEntry,
} from "../../../store/accountSlice";
import { signIn } from "../../../store/loginSlice";
import {
  hasNumber,
  specialChars,
} from "../../../utils/testInput/testInput";
import {
  days,
  daysInMonth,
  months,
  radioText,
  shopFilter,
} from "../../../utils/text/text";
import Button from "../../reusables/button/Button";
import Input from "../../reusables/input/Input";
import Select from "../../reusables/select/Select";
import ViewPassword from "../../viewPassword/ViewPassword";
import CloseIcon from "./../../../assets/Icons/CloseIcon";
import TextContainer from './../../textContainer/TextContainer';
import { validateEmail } from "../../../utils/validate/emailValidate";

function SignUp({ id }) {
  const [birthday, setBirthday] = useState({
    month: months,
    day: days(31),
  });
  const { month, day } = birthday;
  const { register, handleSubmit, watch, formState } =
    useForm();
  const { errors, isValid } = formState;
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pword, setPword] = useState(false);
  const [pvalid, setPValid] = useState("");
  const [fName, setFName] = useState(false);
  const [lName, setLName] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);

  const onSubmit = async (data) => {
    const checkMail = validateEmail(data.email)
    if (!checkMail) return setErrorMsg('Email address is invalid')
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
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const subscription = watch((value) => {
      const {
        cpassword,
        password,
        birthmonth,
        name,
        lastName,
      } = value;
      cpassword.length
        ? setPword(cpassword !== password)
        : setPword(false);

      const numDays = daysInMonth[birthmonth.toLowerCase()];
      setBirthday((b) => ({ ...b, day: days(numDays) }));

      //Name Validation
      setFName(name.length && name.length > 20);
      setLName(lastName.length && lastName.length > 20);
      
      //Reset Form Error when you edit the form
      setErrorMsg('')

      //Password Validation
      const focusPassword = password.length;
      if (focusPassword && password.length < 8) {
        setPValid("password must be at least 8 characters");
      } else if (focusPassword && !specialChars(password)) {
        setPValid("special character must be present");
      } else if (focusPassword && !hasNumber(password)) {
        setPValid("password must include a number");
      } else {
        setPValid(" ");
      }
      console.log(errors)

    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <section className="bg-[var(--white)] h-[65%] flex flex-col absolute bottom-0 w-full p-4 transition-all duration-[1s] lg:w-2/3 md:top-1/2 md:left-1/2 lg:[transform:translate(-50%,-50%)] lg:mx-auto lg:my-0 overflow-auto max-w-[500px] mx:auto">
        <CloseIcon
          className={
            "absolute right-1 top-2 cursor-pointer"
          }
          onClick={() => dispatch(closeEntry())}
        />
        <TextContainer className={'mb-8'}> Join the Team</TextContainer>
        <p className="mt-2 leading-7">
          Create and account and never miss another{" "}
          <b>1800</b> event near you. Explore, make new
          friends, and start #DoingThings. We can’t wait to
          see you out there!{" "}
        </p>
        <p className="my-5">
          Already have an account?{" "}
          <small
            className="underline cursor-pointer ml-1"
            onClick={() => dispatch(showEntry(id))}
          >
            Sign In
          </small>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-6 text-[.8rem] "
        >
          <Input
            label="First Name"
            type="text"
            styles={`px-[12px] ${
              fName
                ? "rounded border-[1px] border-[red]"
                : ""
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
              lName
                ? "rounded border-[1px] border-[red]"
                : ""
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
            {...register("email", { required: true })}
          />
          <section className="">
            <Input
              label="Password"
              type={!view1 ? "password" : "text"}
              styles="relative px-[12px]"
              placeholder="Password must be at least 8 characters"
              {...register("password", { required: true })}
              icon={
                <ViewPassword
                  onClick={() => setView1(!view1)}
                  view={view1}
                />
              }
            />
          </section>
          <p className="h-2 -mt-6 text-red-600">{pvalid}</p>
          <Input
            label="Confirm Password"
            styles="px-[12px]"
            type={!view2 ? "password" : "text"}
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
          />
          {
            <p className="-mt-6 h-2 text-red-600">
              {pword && "Passwords do not match"}
            </p>
          }
          <section className="flex items-center">
            <Input
              type="checkbox"
              className="relative cursor-pointer flex justify-center items-center size-5 self-center rounded-[50%] appearance-none border-[2px] border-solid border-[var(--black)] checked:before:bg-[var(--pry-col)] before:transition-all before:duration-300  before:block before:absolute  before:content-[''] before:size-[.8rem] before:rounded-[50%] "
              {...register("signUp")}
            />{" "}
            <p className="m-1">{radioText}</p>
          </section>
          <Select
            type="signup"
            options={shopFilter}
            label="Shopping For"
            styles={"w-1/2 h-[25px]"}
          />
          <section>
            <p>Birthday</p>
            <section className="flex w-full">
              <Select
                styles={"w-full h-[25px]"}
                type="birthday"
                width='w-[50%]'
                options={month}
                {...register("birthmonth", {
                  required: true,
                })}
              />
              <Select
                type="birthday"
                styles={"w-full ml-2 h-[25px]"}
                width='w-[50%]'
                options={day}
                {...register("birthdate", {
                  required: true,
                })}
              />
            </section>
          </section>
          <p className="text-[.8rem] text-[var(--red)] h-1 -mt-5 mb-4">
            {errorMsg}
          </p>
          <Button
            type="submit"
            onClick={() => setIsVisible(!isValid)}
            styles={`font-medium text-[var(--white)] bg-[var(--black)] w-[10rem] sm:w-[35%] rounded-[24px] h-[48px] px-[24px] hover:bg-[var(--pry-col)] transition-all duration-300 ${
              loading ? "opacity-70 " : "opacity-100"
            }`}
            disabled={loading}
          >
            {loading ? "Doing Things" : "Create Account"}
          </Button>
        </form>
        <p className="mt-4 text-[.8rem]">
          By creating an account, I agree to the{" "}
          <span className="underline">Terms of Use</span>{" "}
          and acknowledge that I have read the{" "}
          <span className="underline">Privacy Policy</span>.
        </p>
      </section>
    </>
  );
}
export default SignUp;
