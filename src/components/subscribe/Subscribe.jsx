import { useState } from "react";
import Heading from "../heading/Heading";
import Button from "../reusables/button/Button";
import Input from "../reusables/input/Input";
import s from "./s_Subscribe.module.css";

const Subscribe = () => {
  const [val, setVal] = useState("");
  const radioOptions = ["Men", "Women", "Both"];
  const [shakeForm, setShakeForm] = useState(null);
  const [input, setInput] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const { email, radio } = formJson;
    const pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    const result = pattern.test(email) && radio;

    if (!email.length) {
      setInput(true);
    }
    return result
      ? setShakeForm(true)
      : setShakeForm(false);
  }
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
          className={`w-full max-w-[700px] min-[700px]:mx-auto ${
            shakeForm === undefined ||
            (shakeForm === null && !shakeForm)
              ? s.form
              : s.shake
          }`}
        >
          <Input
            type="email"
            name="email"
            aria-label="email"
            className={s.email}
            id="email"
            autoComplete="yes"
            defaultValue={val}
            onChange={() => setInput(false)}
            placeholder="name@example.com"
          />
          <p className={s["spam-message"]}>
            We promise not to spam you
          </p>
          <p className={s["email-preference"]}>
            Email preference:{" "}
            <span className="text-sm">
              personalize your newsletter (select gender
              below)
            </span>
          </p>

          <section className={s["radio-options"]}>
            {radioOptions.map((radio) => (
              <section
                key={radio}
                className={s["email-type"]}
              >
                <input
                  data-testid="radio"
                  type="radio"
                  name="radio"
                  value={radio}
                  onChange={() => setInput(false)}
                  className={s["radio-btn"]}
                />
                <p className={s["email-type-text"]}>
                  {radio}
                </p>
              </section>
            ))}
          </section>

          <div className="w-full h-6">
            {shakeForm === false && input ? (
              <small
                data-testid="error"
                className={s["email-warning-text"]}
              >
                Please enter a valid email/ select
                preference
              </small>
            ) : null}
          </div>

          <Button data-testid="btn" styles={s.btn}>
            Sign Up Now
          </Button>
        </form>
      ) : (
        <>
          {" "}
          <section className={s["feedback"]}>
            <p className={s["feedback-text"]}> Sweet!</p>
            <small>We{`'`}ll be in touch soon</small>
          </section>
        </>
      )}
    </section>
  );
};

export default Subscribe;
