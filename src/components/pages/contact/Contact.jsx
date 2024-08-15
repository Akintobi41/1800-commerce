import { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "../../heading/Heading";
import Button from "../../reusables/button/Button";
import PopUp from "./../../popup/PopUp";
import Input from "./../../reusables/input/Input";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const sendMessage = () => {
    reset();
    setIsVisible(true);
  };

  return (
    <>
      <PopUp
        text={
          "Thank you for reaching out, we'll be in touch soon!"
        }
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <section className="px-4 mt-24 max-w-[1500px] mx-auto">
        <Heading className="text-center">
          Let{`'`}s talk about everything{" "}
        </Heading>
        <p className="text-[.85rem]">
          Drop us a message or contact us on any of the
          social media options below the form. We respond
          within 24 hours.
        </p>
        <form
          action=""
          className="mt-8 flex flex-col gap-y-2 mx-auto max-w-xl"
          onSubmit={handleSubmit(sendMessage)}
        >
          <h3 className="text-center font-medium">
            Contact Form
          </h3>
          <Input
            border="border-0 border-b-[1px]"
            placeholder="your name"
            styles="text-[.8rem]"
            height="h-[35px]"
            {...register("name", { required: true })}
          />
          <Input
            border="border-0 border-b-[1px]"
            placeholder="your email"
            styles="text-[.8rem]"
            height="h-[35px]"
            {...register("email", { required: true })}
          />
          <Input
            border="border-0 border-b-[1px]"
            placeholder="say something"
            styles="text-[.8rem]"
            height="h-[35px]"
            {...register("password", { required: true })}
          />
          <Button
            styles={
              "mt-4 bg-[var(--black)] text-[var(--white)] w-[5rem] text-[.85rem] py-1 rounded hover:bg-[var(--pry-col)] transition-all duration-300"
            }
          >
            Submit{" "}
          </Button>
        </form>
      </section>
    </>
  );
};

export default Contact;
