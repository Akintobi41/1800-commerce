
function Select() {
    const filter = ['Featured', 'Alphabetically: A-Z', 'Alphabetically: Z-A', 'Price: Low to High', 'Price: High to Low'];
  return (
      <select onChange={(e) => console.log(e.target.value)} className="w-[96%] outline-none bg-white mb-8 fixed left-0 top-40 z-10 px-4">
          {filter.map((option) => ( 
              <option key={option} value={option}>{option}</option>
          ))}
          </select>
  )
}

export default Select