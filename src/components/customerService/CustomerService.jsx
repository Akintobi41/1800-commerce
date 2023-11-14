import s from "./s_CustomerService.module.css";
const CustomerService = () => {
  const list = ["Faqs", "Return Policy", "Size Guide"];
  return (
    <section className={s["customer-service-section"]}>
      <h3 className={s["text-header"]}>Customer Service</h3>
      {list.map((list) => (
        <p key={list} className={`${s.list} ${s["list"]}`}>
          {list}
        </p>
      ))}
    </section>
  );
};

export default CustomerService;
