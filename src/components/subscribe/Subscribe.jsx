import { useState } from "react";
import s from "./s_Subscribe.module.css";

const Subscribe = () => {
  const [val, setVal] = useState("");
const radioOptions = ["Men", "Women", "Both"];
const [shakeForm, setShakeForm] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const { email, radio } = formJson;
    const pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    const result = pattern.test(email) && radio;
    
    return result
      ? setShakeForm(true)
      : setShakeForm(false);
  }
  return (
    <section className={s["subscribe-container"]}>
    {/* <section className='flex flex-col pt-6 px-6 pb-16 border-b-[1px] border-[rgb(231212/25%)]'>       */}
      <h2 className="shared-h2">Join The Team</h2>
      <p className={s["sign-up"]}>
      {/* <p className='text-[.75rem] mt-[.2rem] mx-0 mb-[1.2rem] leading-[1]'> */}
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
          {/* <p className='text-[.75rem] mt-[.2rem] mx-0 mb-[1.2rem]'> */}
          <p className={s["spam-message"]}>
            We promise not to spam you
          </p>
          <p className={s["email-preference"]}>
          {/* <p className='text-[1.5rem] tracking-[-1.07px] leading-[1.63] mb-6'> */}
            Email preference:
          </p>
          <section className={s["radio-options"]}>
          {/* <section className='flex flex-col'> */}
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
                  // className='relative accent-[var(--black)] w-7 h-7 appearance-none bg-[var(--white)] border-2 border-solid rounded-[14px] cursor-pointer mr-[10px] checked:before:translate'
                />
                 <p className={s["email-type-text"]}>
                {/* <p className='ml-[.15rem]'> */}
                  {radio}
                </p>
              </section>
            ))}
             <button type="submit" className={s.btn}>
            {/* <button type="submit" className='self-end -mt-[3.4rem] bg-[#202020] border-0 rounded-[18px] text-[#fff] cursor-pointer text-[16px] h-[36px] py-0 px-[17px] relative transition-[color] ease-in-out duration-200 whitespace-nowrap'> */}
              Sign Up Now
            </button>
          </section>
        </form>
      ) : (
        <>
            {" "}
            <section className={s["feedback"]}>
          {/* <section className='flex flex-col justify-center items-center gap-[.5rem] h-[15rem]'> */}
          <p className={s["feedback-text"]}> Sweet!</p>
              {/* <p className='text-[2.15rem] font-medium'> Sweet!</p> */}
            <small>We{`'`}ll be in touch soon</small>
          </section>
        </>
      )}

      {shakeForm === false ? (
         <small className={s["email-warning-text"]}>
        {/* // <small className='relative top-[25px] text-[#972111] font-medium'> */}
          Please enter a valid email/ select preference
        </small>
      ) : null}
    </section>
  );
};

export default Subscribe;
