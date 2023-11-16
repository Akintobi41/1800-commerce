import s from "./s_ReturnPolicy.module.css";
import { policy } from "./u_ReturnPolicy";
const ReturnPolicy = () => {
  return (
    <section className={s["return-policy-container"]}>
      <h2 className={s.title}>Return Policy</h2>
      <ul className={s["list-container"]}>
        {policy.map((item) => (
          <li key={item} className={s.list}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReturnPolicy;
