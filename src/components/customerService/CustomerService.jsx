import { Link } from "react-router-dom";

const CustomerService = () => {
  const list = ['My Account','Fabrics', 'Shops', 'Customer Service',"Faqs", "Return Policy", "Size Guide"];
  return (
    <section className='my-2 mx-0'>
      {list.map((list) => (
        <Link
          to={`/${list.split(" ").join("").toLowerCase()}`}
          key={list}
          className={`${list} block mt-4 mx-0 no-underline hover:underline`}
        >
          {list}
        </Link>
      ))}
    </section>
  );
};

export default CustomerService;
