import { Link } from "react-router-dom";
const CustomerService = () => {
  const list = ["Faqs", "Return Policy", "Size Guide"];
  return (
    <section className='my-6 mx-0'>
      <h3 className='mb-6'>Customer Service</h3>
      {list.map((list) => (
        <Link
          to={`/${list.split(" ").join("").toLowerCase()}`}
          key={list}
          className={`${list} block my-2 mx-0 no-underline hover:underline`}
        >
          {list}
        </Link>
      ))}
    </section>
  );
};

export default CustomerService;
