import React from "react";
import useForms from "@hooks/useForms/useForms";
import SignUpForm from "./signUpForm";
import SignUpHeader from "./signUpHeader";


const SignUp: React.FC = () => {
  const { data } = useForms(); 

  return (
    <section className="bg-[var(--white)] h-full mt-24 flex flex-col w-full p-4 transition-all duration-[1s] lg:w-2/3 lg:mx-auto overflow-auto max-w-lg mx-auto">
      <SignUpHeader />
      <SignUpForm formProp={data} />
      <p className="mt-4 text-sm">
        By creating an account, I agree to the{" "}
        <span className="underline">Terms of Use</span> and
        acknowledge that I have read the{" "}
        <span className="underline">Privacy Policy</span>.
      </p>
    </section>
  );
};

export default SignUp;