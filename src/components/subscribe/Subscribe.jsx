import s from "./s_Subscribe.module.css";
import "/styles/sharedStyles.css";
const radioOptions = ["Men", "Women", "Both"];

const Subscribe = () => {
  return (
    <section className={s["subscribe-container"]}>
      <h2 className="shared-h2">Join The Team</h2>
      <p className={s["sign-up"]}>
        Sign up for exclusive 1800-only deals and early
        access to new products.
      </p>

      {/* <section className={s["input-section"]}> */}
      <label htmlFor="email" className={s["email-label"]}>
        Email
        <input
          type="email"
          className={s.email}
          id="email"
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
          <section key={radio} className={s["email-type"]}>
            <input
              type="radio"
              name="radio"
              value={radio}
              className={s["radio-btn"]}
            />
            <p className={s["email-type-text"]}>{radio}</p>
          </section>
        ))}
        <button className={s.btn}>Sign Up Now</button>
      </section>
    </section>
  );
};

export default Subscribe;
