function Select() {
  const filter = [
    "Featured",
    "Alphabetically: A-Z",
    "Alphabetically: Z-A",
    "Price: Low to High",
    "Price: High to Low",
  ];
  return (
    <select
      onChange={(e) => console.log(e.target.value)}
      className="block self-start w-full h-10 outline-none bg-white mb-8 sticky left-0 top-16 px-2 z-10 cursor-pointer"
    >
      {filter.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
