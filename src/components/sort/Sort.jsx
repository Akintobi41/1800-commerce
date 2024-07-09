import { useState } from "react";
import { sort } from "../../utils/text/text";
import Select from "../reusables/select/Select";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { sortProducts } from "../../store/productSlice";

function Sort({ list }) {

  const products = useSelector((state) => state.products.products)
  const [val, setValue] = useState("");
  const dispatch = useDispatch();
  console.log(products)

  function Sort(e) {
    const val = e.target.value;
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
      None: [...list],
      "Alphabetically: A-Z": a_z,
      "Alphabetically: Z-A": z_a,
      "Price: Low to High": low,
      "Price: High to Low": high,
    }[val];
    // setProducts([...result]);
    dispatch(sortProducts(result))
  }
  return (
    <Select
      type="products"
      options={sort}
      styles={
        "block self-start w-full h-10 outline-none bg-white mb-8 sticky left-0 top-16 px-2 z-10 cursor-pointer"
      }
      onChange={Sort}
    />
  );
}

export default Sort;
