import Heading from "@components/heading";
import Button from "@components/reusables/button";
import Input from "@components/reusables/input";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const [successText, setSuccessText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const sendMessage = async (data: FormData) => {
    setSubmitting(true);
    setTimeout(() => {
      reset();
      setSuccessText(
        "Thank you for reaching out, we'll be in touch soon!"
      );
      setSubmitting(false);
    }, 1500);
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
    <section
      data-testid="contact"
      className="px-4 mt-24 max-w-[1500px] mx-auto"
    >
      <Heading className="text-center">
        Let’s talk about everything
      </Heading>
      <p className="text-[.85rem] mt-2 max-w-lg mx-auto">
        Drop us a message or contact us on any of the social
        media options below the form. We respond within 24
        hours.
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
          placeholder="Your name"
          aria-label="name"
          data-testid="name"
          styles="text-sm"
          height="h-[35px]"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && (
          <span className="text-xs text-red-500">
            {errors.name.message}
          </span>
        )}

        <Input
          border="border-0 border-b-[1px]"
          placeholder="Your email"
          aria-label="email"
          data-testid="email"
          styles="text-sm"
          height="h-[35px]"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email format is invalid",
            },
          })}
        />
        {errors.email && (
          <span className="text-xs text-red-500">
            {errors.email.message}
          </span>
        )}

        <Input
          border="border-0 border-b-[1px]"
          placeholder="Say something"
          aria-label="message"
          data-testid="message"
          styles="text-sm"
          height="h-[35px]"
          {...register("message", {
            required: "Message is required",
          })}
        />
        {errors.message && (
          <span className="text-xs text-red-500">
            {errors.message.message}
          </span>
        )}

        <small className="h-4 text-green-500">
          {successText}
        </small>

        <Button
          aria-label={submitting ? "Submitting" : "Submit"}
          styles="mt-4 bg-[var(--black)] text-white w-24 text-xs py-1 rounded hover:bg-[var(--pry-col)] transition-all duration-300"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </section>
  );
};

export default Contact;
