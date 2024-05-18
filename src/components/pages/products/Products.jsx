import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../contexts/MyContext";
import useResetSearchAndMenu from "../../../hooks/useResetSearchAndMenu";
import { fetchContentfulData } from "./fetchContentfulData";
import s from "./s_Products.module.css";

const Products = () => {
  const { setSearch, setMenuToggle, setCart } =
    useContext(MyContext);
  useResetSearchAndMenu(setSearch, setMenuToggle);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inCart, setInCart] = useState([]);
  const [cartStatus, setCartStatus] = useState(false);
  const [quantity, setQuantity] = useState(0);
  // const savedProduct = JSON.parse(
  //   localStorage.getItem("product")
  // );
  // const [storedCartItems, setStoredCartItems] =
  //   useState(savedProduct);

  useEffect(() => {
    (async () => {
      try {
        const { items } = await fetchContentfulData(
          "products"
        );
        items.map((item) => (item.fields.quantity = 0));
        setProducts(items);
        // localStorage.setItem(
        //   "product",
        //   JSON.stringify(data)
        // );
        setLoading(true);
      } catch (error) {
        setLoading(false);
        console.error("Failed to fetch");
      }
    })();
  }, []);

  let description, name, price, images;
  const Skeleton = Array(5).fill(0);

  [...products].map(
    (item) =>
      ({ description, name, price, images } = item.fields)
  );

  function addToCart(product) {
    // console.log(product);
    // console.log(inCart);
    const check = inCart.some(
      (item) => item.name === product.fields.name
    );
    console.log(check);
    // if (!check) {
    //   console.log("!check");
    //   setInCart([...inCart, product.fields]);
    // } else {
    //   console.log("false");
    // }
    // console.log(inCart);
    // const updatedCart = inCart.map(
    //   (item) => ++item.quantity
    // );
    // // console.log(updatedCart);
    // setInCart(updatedCart);
  }
  // console.log(inCart);
  useEffect(() => {
    console.log(inCart);
  }, [inCart]);
  console.log(products);

  return (
    <section className={s["products-container"]}>
      {loading
        ? [...products].map((product) => (
            <section
              key={product.fields.name}
              className={s["product"]}
            >
              <p>{product.fields.type}</p>
              <section className={s["product-img-section"]}>
                <img
                  src={
                    product.fields.images[0].fields.file.url
                  }
                  loading="lazy"
                  className={s["product-img"]}
                />
                <button
                  className={s["add-to-cart-btn"]}
                  onClick={(e) => {
                    addToCart(product);
                    // checkproduct(product);
                    setQuantity(++product.fields.quantity);
                  }}
                >
                  {" "}
                  {inCart.some(
                    (item) =>
                      item.name === product.fields.name
                  )
                    ? "Buy More"
                    : "Add to Cart"}
                </button>
              </section>
            </section>
          ))
        : Skeleton.map((el, i) => (
            <section
              className={s["product-fallback"]}
              key={i}
            >
              <img
                className={s["product-img-fallback"]}
                loading="lazy"
              />
            </section>
          ))}
    </section>
  );
};

export default Products;
