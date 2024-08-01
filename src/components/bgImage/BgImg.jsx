
function BgImg({ img, i }) {
  return (
      <div
      key={img}
      className={`w-full ${i > 0 ? "ml-2" : ""}  ${
        i === 1 ? "hidden lg:block" : ""
      } bg-gray-400`}
    >
      <img
        src={img}
        alt="background-image"
        loading="lazy"
        className="object-cover size-full"
      />
    </div>
  )
}
export default BgImg