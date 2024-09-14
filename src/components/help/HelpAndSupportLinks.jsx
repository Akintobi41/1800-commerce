import { Link } from "react-router-dom";

const HelpAndSupportLinks = () => {
  const list = [
    "My Account",
    "Fabrics",
    "Shops",
    "Faqs",
    "Return Policy",
    "Size Guide",
  ];
  return (
    <section className="my-2 mx-0">
      {list.map((list) => (
        <Link
          key={list}
          className={`${list} block mt-4 mx-0 no-underline hover:underline`}
        >
          {list}
        </Link>
      ))}
    </section>
  );
};

export default HelpAndSupportLinks;
