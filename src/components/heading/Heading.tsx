function Heading({ children, className }) {
  return (
    <section
      className={`text-[25px] mt-4 mb-12 font-[700] text-center ${className}`}
    >
      {children}
    </section>
  );
}

export default Heading;
