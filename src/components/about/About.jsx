import s from "./s_About.module.css";
const About = () => {
  return (
    <aside className={s["about-container"]}>
      <h3>About 1800 Store</h3>
      <p>
        Welcome to [Your E-commerce Business Name], where
        tradition meets innovation. As a family-owned
        enterprise, we{`'`}ve weathered the e-commerce
        landscape{`'`}s ever-changing tides, witnessing
        trends come and go. Our journey through the digital
        marketplace has been a source of inspiration,
        enabling us to continually evolve and adapt. Over
        the years, we{`'`}ve embraced and incorporated the
        best of these trends into our business, always
        seeking to provide you with the finest products and
        services. Our commitment to quality, customer
        satisfaction, and a deep-rooted sense of
        responsibility to our community is unwavering.
      </p>
    </aside>
  );
};

export default About;
