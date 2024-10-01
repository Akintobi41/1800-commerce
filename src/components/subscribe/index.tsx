import Heading from "@components/heading";
import Button from "@components/reusables/button";
import Input from "@components/reusables/input";
import { FormEvent, useState } from "react";
import s from "./s_Subscribe.module.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [shakeForm, setShakeForm] = useState(false);
  const [inputError, setInputError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate email
    const pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = pattern.test(email);
    const isGenderSelected = selectedGender.length > 0;

    if (!isEmailValid) {
      setInputError("Please enter a valid email address.");
      return;
    }

    if (!isGenderSelected) {
      setInputError("Please select a gender preference.");
      return;
    }

    setShakeForm(true);


    // Reset form fields
    setEmail("");
    setSelectedGender("");
    setInputError(""); 
  };

  return (
    <section className={s["subscribe-container"]}>
      <Heading>Join Our Newsletter</Heading>
      <p className={s["sign-up"]}>
        Sign up for exclusive 1800-only deals and early
        access to new products.
      </p>

      {!shakeForm ? (
        <form
          onSubmit={handleSubmit}
          className={`${s.form} ${
            shakeForm ? s.shake : ""
          }`}
        >
          <Input
            type="email"
            name="email"
            aria-label="email"
            className={s.email}
            id="email"
            autoComplete="yes"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setInputError(""); 
            }}
            placeholder="name@example.com"
          />
          <p className={s["spam-message"]}>
            We promise not to spam you.
          </p>
          <p className={s["email-preference"]}>
            Email preference:{" "}
            <span className="text-sm">
              Personalize your newsletter (select gender
              below)
            </span>
          </p>

          <section className={s["radio-options"]}>
            {["Men", "Women", "Both"].map((gender) => (
              <section
                key={gender}
                className={s["email-type"]}
              >
                <Input
                  data-testid="radio"
                  type="radio"
                  name="radio"
                  value={gender}
                  onChange={() => {
                    setSelectedGender(gender);
                    setInputError(""); 
                  }}
                  className={s["radio-btn"]}
                />
                <p className={s["email-type-text"]}>
                  {gender}
                </p>
              </section>
            ))}
          </section>

          <div className="w-full h-6">
            {inputError && (
              <small
                data-testid="error"
                className={s["email-warning-text"]}
              >
                {inputError}
              </small>
            )}
          </div>

          <Button data-testid="btn" styles={s.btn}>
            Subscribe
          </Button>
        </form>
      ) : (
        <section className={s["feedback"]}>
          <p className={s["feedback-text"]}>Sweet!</p>
          <small>We'll be in touch soon.</small>
        </section>
      )}
    </section>
  );
};

export default Subscribe;
