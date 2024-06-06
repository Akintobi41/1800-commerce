import {useEffect, useState } from "react";
import { fetchContentfulData } from "./fetchContentfulData";

const Products = () => {
  // const { setSearch, setMenuToggle, setCart } =
  //   useContext(MyContext);
  // useResetSearchAndMenu(setSearch, setMenuToggle);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inCart, setInCart] = useState([]);
  const [cartStatus, setCartStatus] = useState(false);
  const [quantity, setQuantity] = useState(0);
  

  useEffect(() => {
    (async () => {
      try {
        const { items } = await fetchContentfulData(
          "products"
        );
        items.map((item) => (item.fields.quantity = 0));
        setProducts(items);
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
    if (!check) {
      console.log("!check");
      setInCart([...inCart, product.fields]);
    } else {
      console.log("false");
      console.log(inCart)
      const newCart = inCart.filter((i) => {
        return i.name !== product.fields.name
      })
      setInCart(newCart)
    }
    // console.log(inCart);
    // const updatedCart = inCart.map(
    //   (item) => ++item.quantity
    // );
    // // console.log(updatedCart);
    // setInCart(updatedCart);
  }
  useEffect(() => {
    console.log(inCart);
  }, [inCart]);

  console.log(products)

  return (
    <section className='flex flex-col items-center gap-12'>
      {loading
        ? [...products].map((product) => (
            <section
              key={product.fields.name}
              className='flex relative w-48 h-64'
            >
              <p>{product.fields.type}</p>
              <section className='relative'>
                <img
                  src={
                    product.fields.images[0].fields.file.url
                  }
                  loading="lazy"
                  className='w-full h-full bg-[var(--grey)]'
                />
                <button
                  className='absolute right-0 top-0 w-28 h-8 bg-[var(--black)] text-[var(--white)] uppercase border-none outline-none cursor-pointer'
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
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </section>
            </section>
          ))
        : Skeleton.map((el, i) => (
            <section
              className='flex relative w-48 h-64'
              key={i}
            >
              <img
                className='w-full h-full bg-[var(--grey)]'
                loading="lazy"
              />
            </section>
          ))}
    </section>
  );
};

export default Products;
