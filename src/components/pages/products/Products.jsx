import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllData } from "../../../contentful/contentful";
import { modifyCart } from "../../../store/cartSlice";
import { format } from "../../../utils/format/format";
import Button from "../../reusables/button/Button";
import Sort from "../../sort/Sort";
import Filter from "../../filter/Filter";
import { setProducts } from "../../../store/productSlice";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state.cart.products);
  const products = useSelector(
    (state) => state.products.products
  );
  // console.log(products)  why does it show [object,object]
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [val, setValue] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { items } = await fetchAllData("products");
        items.map((item) => (item.fields.quantity = 0));
        setList(items);
        setFilterData(items);
        setLoading(true);
        dispatch(setProducts(items));
      } catch (error) {
        setLoading(false);
        console.error("Failed to fetch");
      }
    })();
  }, []);

  const Skeleton = Array(6).fill(0); // for skeleton
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
    <section className="relative flex flex-col mt-24 p-4 min-h-[500px] bg-[var(--white)] overflow-x-hidden">
      {/* Shop
      Need help deciding which product is the right size for you?
      Check out our  <Link>size guide </Link>for smooth decision. */}
      {/* <h2>Shop</h2> */}
      <div className="border-t-[1px] border-gray-200 w-[120%] my-4 box-border relative right-[16px]"></div>
      <section className="flex ">
        <Sort list={list} />
        <Filter
          filterData={filterData}
          setProducts={setProducts}
        />
      </section>
      <section className="flex flex-wrap justify-center gap-y-2 gap-x-3">
        {loading
          ? [...products].map((product) => {
              const { name, images, type, price } =
                product.fields;

              return (
                <section
                  key={name}
                  className="flex flex-col relative w-[45%] h-60 l-screen:h-64 cursor-pointer border-none" //swap styles from w-48 h-64  make this responsive
                  onClick={(e) => handleClick(e, product)}
                >
                  <section className="relative w-full bg-[#fff]">
                    <img
                      src={images[0].fields.file.url}
                      loading="lazy"
                      className="size-full bg-[#a8a29e1a] object-cover hover:transition-all duration-300  border border-[#8080801c]"
                    />
                    <Button
                      styles={
                        "absolute right-0 top-0 w-full h-6 bg-[var(--black)] text-[var(--white)] text-[.8rem] border-none outline-none cursor-pointer"
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
                      className={`text-[.8rem] mt-1 ${
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
            })
          : Skeleton.map((el, i) => (
              <section
                className="flex w-[45%] relative h-64 bg-primary-500/50 border border-[#bcbcbc33]"
                key={i}
              ></section>
            ))}
      </section>
    </section>
  );
};

export default Products;
