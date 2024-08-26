import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { modifyCart } from "../../../../store/cartSlice";
import { format } from "../../../../utils/format/format";
import Button from "../../../reusables/button/Button";

function RenderProducts({ next }) {
  const cart = useSelector((state) => state.cart.products);
  const products =
    useSelector((state) => state.products.products) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(e, product) {
    const cartRedirect = e.target.textContent;
    if (cartRedirect.endsWith("Cart")) {
      dispatch(modifyCart(product.fields));
    } else {
      navigate(`/products/${product.sys.id}`);
    }
  }

  return (
    <>
      {[...products.slice(0, next)].map((product) => {
        const { name, images, type, price } =
          product.fields;

        return (
          <section
            key={name}
            className="flex flex-col relative w-[47%] sm:w-[30%] md:w-[23%] lg:w-[30%] h-[18rem] sm:h-[24em] max-h-[700px] cursor-pointer border-none" //swap styles from w-48 h-64  make this responsive
            onClick={(e) => handleClick(e, product)}
          >
            <section className="relative w-full bg-[#fff] h-[60%] lg:-h-[700px]">
              <img
                src={images[0].fields.file.url}
                loading="lazy"
                className="w-full h-full bg-[#a8a29e1a] object-cover hover:transition-all duration-300  border border-[#8080801c]"
              />
              <Button
                styles={
                  "absolute right-0 top-0 w-full h-6 bg-[var(--black)] text-[var(--white)] text-sm border-none outline-none cursor-pointer"
                }
              >
                {" "}
                {[...cart].some(
                  (item) => item.name === name
                )
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </Button>
            </section>
            {[name, type, price].map((item, i) => (
              <p
                key={item}
                className={`text-sm mt-1 ${
                  i > 1 ? "font-medium" : ""
                } ${
                  i === 1
                    ? "text-[#737373] text-[11px]"
                    : ""
                } `}
              >
                {i > 1 ? format(price) : item}
              </p>
            ))}
          </section>
        );
      })}
    </>
  );
}

export default RenderProducts;
