import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllData } from "../../../contentful/contentful";
import { modifyCart } from "../../../store/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { items } = await fetchAllData("products");
        items.map((item) => (item.fields.quantity = 0));
        setProducts(items);
        setLoading(true);
      } catch (error) {
        setLoading(false);
        console.error("Failed to fetch");
      }
    })();
  }, []);

  const Skeleton = Array(5).fill(0); // for skeleton

  return (
    <section className="flex flex-col items-center gap-12 mt-4 px-8">
      {loading
        ? [...products].map((product) => (
            <section
              to={`/products/${product.sys.id}`}
              key={product.fields.name}
              className="flex relative w-full h-full"  //swap styles from w-48 h-64
            >
              <p>{product.fields.type}</p>
              <section className="relative">
                <img
                  src={
                    product.fields.images[0].fields.file.url
                  }
                  loading="lazy"
                  className="w-full h-full bg-[var(--grey)]"
                />
                <button
                  className="absolute right-0 top-0 w-28 h-8 bg-[var(--black)] text-[var(--white)] uppercase border-none outline-none cursor-pointer"
                onClick={() => {
                    dispatch(modifyCart(product.fields));
                  }}
                >
                  {" "}
                  {[...cart].some(
                    (item) =>
                      item.name === product.fields.name
                  )
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </section>
            </section>
          ))
        : Skeleton.map((el, i) => (
            <section
              className="flex relative w-48 h-64"
              key={i}
            >
              <img
                className="w-full h-full bg-[var(--grey)]"
                loading="lazy"
              />
            </section>
          ))}
    </section>
  );
};

export default Products;
