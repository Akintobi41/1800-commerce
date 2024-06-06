import Logo from "../logo/Logo";

const About = () => {
  return (
    <aside className='flex flex-col items-center m-6 p-6 gap-8 leading-[2] bg-[var(--white)]'>
      <h2 className="text-bold-font font-[500] text-center">About 1800 Store</h2>
      <p>
        Welcome to 1800 Store, where tradition meets
        innovation. As a family-owned enterprise, we{`'`}ve
        weathered the e-commerce landscape{`'`}s
        ever-changing tides, witnessing trends come and go.
        Our journey through the digital marketplace has been
        a source of inspiration, enabling us to continually
        evolve and adapt. Over the years, we{`'`}ve embraced
        and incorporated the best of these trends into our
        business, always seeking to provide you with the
        finest products and services. Our commitment to
        quality, customer satisfaction, and a deep-rooted
        sense of responsibility to our community is
        unwavering.
      </p>
      <Logo />
    </aside>
  );
};

export default About;
