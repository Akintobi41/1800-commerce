import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from "../../store/productSlice";
import { sort } from "../../utils/text/text";
import Select from "../reusables/select/Select";

const sortType = localStorage.getItem("sortValue");

function Sort() {
  const products = useSelector(
    (state) => state.products.myProducts
  );
  const optionRef = useRef();
  const [value, setValue] = useState(sortType);
  const dispatch = useDispatch();

  useEffect(() => {
    Sort();
  }, [products]);

  useEffect(() => {
    localStorage.setItem("sortValue", value);
  }, [value]);

  function Sort(e) {
    const val = e?.target.value || optionRef.current?.value;
    setValue(val);
    const z_a = [...products].sort((a, b) =>
      a.fields.name < b.fields.name ? 1 : -1
    );
    const a_z = [...products].sort((a, b) =>
      a.fields.name > b.fields.name ? 1 : -1
    );
    const low = [...products].sort((a, b) =>
      a.fields.price > b.fields.price ? 1 : -1
    );
    const high = [...products].sort((a, b) =>
      a.fields.price < b.fields.price ? 1 : -1
    );

    const result = {
      None: [...products],
      "Alphabetically: A-Z": a_z,
      "Alphabetically: Z-A": z_a,
      "Price: Low to High": low,
      "Price: High to Low": high,
    }[val];
    dispatch(sortProducts(result));
  }
  return (
    <Select
      type="products"
      text={value}
      label="Sort"
      options={sort}
      border="none"
      width="w-[8.2rem]"
      styles={
        "block self-start w-full h-10 text-[.8rem] border-b outline-none bg-white mb-8 sticky left-0 top-16 z-10 cursor-pointer"
      }
      onChange={Sort}
    />
  );
}

export default Sort;
