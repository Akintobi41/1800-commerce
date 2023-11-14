import { useState } from "react";
import s from "./s_Subscribe.module.css";
import "/styles/sharedStyles.css";
const radioOptions = ["Men", "Women", "Both"];

const Subscribe = () => {
  const [val, setVal] = useState("");
  const [shakeForm, setShakeForm] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const { email, radio } = formJson;
    const pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    const result = pattern.test(email) && radio;
    console.log(result);
    return result
      ? setShakeForm(true)
      : setShakeForm(false);
  }
  return (
    <section className={s["subscribe-container"]}>
      <h2 className="shared-h2">Join The Team</h2>
      <p className={s["sign-up"]}>
        Sign up for exclusive 1800-only deals and early
        access to new products.
      </p>

      {!shakeForm ? (
        <form
          action=""
          onSubmit={handleSubmit}
          className={`${
            shakeForm === undefined ||
            (shakeForm === null && !shakeForm)
              ? s.form
              : s.shake
          }`}
        >
          <label
            htmlFor="email"
            className={s["email-label"]}
          >
            Email
            <input
              type="email"
              name="email"
              className={s.email}
              id="email"
              autoComplete="yes"
              defaultValue={val}
            />
          </label>
          <p className={s["spam-message"]}>
            We promise not to spam you
          </p>
          <p className={s["email-preference"]}>
            Email preference:
          </p>
          <section className={s["radio-options"]}>
            {radioOptions.map((radio) => (
              <section
                key={radio}
                className={s["email-type"]}
              >
                <input
                  type="radio"
                  name="radio"
                  value={radio}
                  className={s["radio-btn"]}
                />
                <p className={s["email-type-text"]}>
                  {radio}
                </p>
              </section>
            ))}
            <button type="submit" className={s.btn}>
              Sign Up Now
            </button>
          </section>
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

      {shakeForm === false ? (
        <small className={s["email-warning-text"]}>
          Please enter a valid email
        </small>
      ) : null}
    </section>
  );
};

export default Subscribe;
