import s from "./s_Contact.module.css";
const Contact = () => {
  return (
    <section className={s["contact-container"]}>
      <h3>Let{`'`}s talk about everything </h3>
      <p>
        Drop us a message or contact us on any of the social
        media options below the form. We respond within 24
        hours.
      </p>
      <form action="" className={s.form}>
        <h3 className={s["form-title"]}>Contact Form</h3>
      </form>
    </section>
  );
};

export default Contact;
