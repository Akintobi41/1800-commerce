import Heading from "../heading/Heading";
import Logo from "../logo/Logo";

const About = () => {
  return (
    <aside className='flex flex-col items-center px-4 gap-2 leading-[2] bg-[var(--white)] mt-28 max-w-[1500px] mx-auto'>
      <Heading> What do you know about us?</Heading>
      <p className="px-4 text-left mx-auto lg:leading-[2.5]">
     

Welcome to 1800 Store, where tradition meets innovation. As a family-owned enterprise, we've weathered the e-commerce landscape's ever-changing tides, witnessing trends come and go. Our journey through the digital marketplace has been a source of inspiration, enabling us to continually evolve and adapt. Over the years, we've embraced and incorporated the best of these trends into our business, always seeking to provide you with the finest products and services. Our commitment to quality, customer satisfaction, and a deep-rooted sense of responsibility to our community is unwavering.

At 1800 Store, we believe in the power of heritage and the importance of moving forward. <br /> Our roots run deep, yet our vision is always set on the future. This dual focus allows us to offer a unique blend of classic charm and modern convenience. Each product we offer is carefully curated to reflect our values of excellence, sustainability, and authenticity.

We take pride in fostering strong relationships with our customers, treating each interaction as an opportunity to build trust and loyalty. Our dedicated team works tirelessly to ensure that your shopping experience is seamless and enjoyable, from browsing our extensive catalog to the moment your order arrives at your doorstep.

In a world where digital transformation is constant, we remain steadfast in our mission to bring you exceptional value without compromising our core principles. <br /> Our story is one of resilience, passion, and a relentless pursuit of excellence. Thank you for being part of our journey, and we look forward to serving you with the same dedication and care that has defined 1800 Store for generations.
      </p>
      <Logo />
    </aside>
  );
};

export default About;
