const CustomerService = () => {
  const list = ["Faqs", "Return Policy", "Size Guide"];
  return (
    <section>
      <h3>Customer Service</h3>
      {list.map((list) => (
        <p key={list}>{list}</p>
      ))}
    </section>
  );
};

export default CustomerService;
