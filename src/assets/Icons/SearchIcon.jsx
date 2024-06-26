/* eslint-disable react/prop-types */

function SearchIcon({search,setSearch,top ='',refs}) {
  return (
    <svg
      className={`feather feather-search cursor-pointer relative ${top}`}
      onClick={() => setSearch(!search)}
      ref={refs}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
    </svg>
  );
}

export default SearchIcon;
