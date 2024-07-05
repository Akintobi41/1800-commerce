import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllData } from "../../../contentful/contentful";
import { modifyCart } from "../../../store/cartSlice";
import { format } from "../../../utils/format/format";
import Button from "../../reusables/button/Button";
import Select from "../../reusables/select/Select";
import { filter } from './../../../utils/filter/FilterOption';
import { options } from "../../../utils/text/text";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state.account.products);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [val, setValue] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { items } = await fetchAllData("products");
        items.map((item) => (item.fields.quantity = 0));
        setProducts(items);
        setList(items);
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

  function Sort(e) { 
    const val = e.target.value;
    setValue(val);
    const z_a = [...products].sort((a, b) => a.fields.name < b.fields.name ? 1 : -1)
    const a_z = [...products].sort((a, b) => a.fields.name > b.fields.name ? 1 : -1)
    const low = [...products].sort((a, b) => a.fields.price > b.fields.price ? 1 : -1)
    const high = [...products].sort((a, b) => a.fields.price < b.fields.price ? 1 : -1)

    const result = {
       Featured: [...list],
      'Alphabetically: A-Z': a_z,
      'Alphabetically: Z-A': z_a,
      'Price: Low to High': low,
      'Price: High to Low': high
    }[val];
    setProducts([...result]);
  }


  return (
    <section className="relative flex flex-col mt-24 p-4 min-h-[500px] bg-[var(--white)]">
      {/* Shop
      Need help deciding which product is the right size for you?
      Check out our  <Link>size guide </Link>for smooth decision. */}
      {/* <h2>Shop</h2> */}
      <Select type='products' options={filter} styles={"block self-start w-full h-10 outline-none bg-white mb-8 sticky left-0 top-16 px-2 z-10 cursor-pointer"} onChange={Sort}/>
      <section className="flex flex-wrap justify-center gap-y-10 gap-x-3">
      {loading
          ? [...products].map((product) => {

            const { name, images, type, price } = product.fields;
            
            return (
              <section
                key={name}
                className="flex flex-col relative w-[45%] l-screen:h-64 cursor-pointer border-none"  //swap styles from w-48 h-64  make this responsive
                onClick={(e) => handleClick(e, product)}
              >
                <section className="relative w-full">
                  <img
                    src={
                      images[0].fields.file.url
                    }
                    loading="lazy"
                    className="size-full bg-[#a8a29e1a] object-cover hover:transition-all duration-300  border border-[#8080801c]"
                  />
                  <Button styles={"absolute right-0 top-0 w-full h-6 bg-[var(--black)] text-[var(--white)] text-[.8rem] border-none outline-none cursor-pointer"}>

               
                    {" "}
                    {[...cart].some(
                      (item) =>
                        item.name === name
                    )
                      ? "Remove from Cart"
                      : "Add to Cart"}
                  </Button>

                </section>
                {[name, type, price].map((item,i) => ( 
                <p key={item} className={`text-[.8rem] mt-1 ${i > 1 ? 'font-medium' : ''} ${i === 1 ? 'text-[#737373] text-[11px]' : '' } `}>{i > 1 ? format(price) : item }</p>
                ))}    
              </section>
            )
          }
          )
          
        : Skeleton.map((el, i) => (
            <section
              className="flex w-[45%] relative h-64 bg-primary-500/50 border border-[#bcbcbc33]"
              key={i}
            >
            </section>
          ))}
      </section>
     
    </section>
  );
};

export default Products;
