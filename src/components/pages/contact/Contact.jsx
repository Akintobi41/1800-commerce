import Heading from "@components/heading/Heading";
import Button from "@reusables/button/Button";
import Input from "@reusables/input/Input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successText, setSuccessText] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const sendMessage = () => {
    reset();
    setSuccessText(
      "Thank you for reaching out, we'll be in touch soon!"
    );
  };
  

  useEffect(() => {
    if (successText.length) {
      const timer = setTimeout(() => {
        setSuccessText("");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [successText]);
  

  return (
    <>
      <section
        data-testid="contact"
        className="px-4 mt-24 max-w-[1500px] mx-auto"
      >
        <Heading className="text-center">
          Let{`'`}s talk about everything{" "}
        </Heading>
        <p className="text-[.85rem] mt-2 max-w-[500px] mx-auto">
          Drop us a message or contact us on any of the
          social media options below the form. We respond
          within 24 hours.
        </p>
        <form
          action=""
          className="mt-8 flex flex-col gap-y-2 mx-auto max-w-xl"
          onSubmit={handleSubmit(sendMessage)}
        >
          <h3 className="text-center font-medium my-8">
            Contact Form
          </h3>
          <Input
            border="border-0 border-b-[1px]"
            placeholder="your name"
            aria-label='name'
            data-testid= 'name'
            styles="text-sm"
            height="h-[35px]"
            {...register("name", { required: true })}
          />
          <Input
            border="border-0 border-b-[1px]"
            placeholder="your email"
            data-testid= 'email'
            styles="text-sm"
            height="h-[35px]"
            {...register("email", { required: true })}
          />
          <Input
            border="border-0 border-b-[1px]"
            placeholder="say something"
            data-testid= 'message'
            styles="text-sm"
            height="h-[35px]"
            {...register("password", { required: true })}
          />
          <small className="h-4 text-green-500">
            {successText}
          </small>
          <Button
          aria-label= 'button'
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
