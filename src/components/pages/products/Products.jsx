import {useEffect, useState } from "react";
import { fetchContentfulData } from "./fetchContentfulData";
import { useDispatch, useSelector } from "react-redux";
import { modifyCart } from "../../../store/cartSlice";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const val = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const id = useParams();
  console.log(id)

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

  const Skeleton = Array(5).fill(0);  // for skeleton
 
  [...products].map(
    (item) =>
      ({ description, name, price, images } = item.fields)
  );


  const cart = val.products;


  return (
    <section className='flex flex-col items-center gap-12 mt-4'>
      {loading
        ? [...products].map((product) => (
          <Link
            to={'/products/id'}
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
                onClick={() => {
                  dispatch(modifyCart(product.fields))
                  }}
                >
                  {" "}
                  {cart.some(
                    (item) =>
                      item.data.name === product.fields.name
                  )
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </section>
            </Link>
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
