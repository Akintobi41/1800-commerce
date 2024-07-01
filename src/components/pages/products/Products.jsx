import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../../../contentful/contentful";
import { modifyCart } from "../../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import Select from "../../select/Select";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state.account.products);
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

  const Skeleton = Array(6).fill(0); // for skeleton
  const navigate = useNavigate()

  function handleClick(e,product) {
    console.log(e.target.textContent)
    const cartRedirect = e.target.textContent;

    if (cartRedirect.endsWith('Cart')) { 
      dispatch(modifyCart(product.fields));
    }
    else { 
       navigate(`/products/${product.sys.id}`)
    }
  }
  // Filter by Products, bag , shoes or belts

  return (
    <section className="relative flex flex-col mt-24 p-4 min-h-[500px] bg-[var(--white)]">
      {/* Shop
      Need help deciding which product is the right size for you?
      Check out our  <Link>size guide </Link>for smooth decision. */}
      {/* <h2>Shop</h2> */}
  <Select/>
      <section className="flex flex-wrap gap-2">
      {loading
        ? [...products].map((product) => (
            <section
              key={product.fields.name}
            className="flex relative w-[48%] h-64 cursor-pointer border-none"  //swap styles from w-48 h-64
            onClick={(e)=> handleClick(e,product)}
            >
              <section className="relative w-full ">
                <img
                  src={
                    product.fields.images[0].fields.file.url
                  }
                  loading="lazy"
                  className="h-[70%] w-[100%] bg-[#a8a29e1a] hover:object-cover hover:transition-all duration-300  border border-[#8080801c]"
              />
                <button
                  className="absolute right-0 top-0 w-full h-6 bg-[var(--black)] text-[var(--white)] text-[.8rem] border-none outline-none cursor-pointer"
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
            {/* <p>{ product.fields.name}</p> */}
          </section>
        ))
          
        : Skeleton.map((el, i) => (
            <section
              className="flex w-[48%] relative h-64 bg-primary-500/50 border border-[#bcbcbc33]"
              key={i}
            >
              {/* <img
                className="w-full h-full bg-[rgba(211,211,211,0.05)]  border-none"
                loading="lazy"
              /> */}
            </section>
          ))}
      </section>
     
    </section>
  );
};

export default Products;
