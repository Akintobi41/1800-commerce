import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  setProducts,
} from "@store/productSlice";
import { filter } from "@utils/constants/constants";
import Select from "@components/reusables/select/Select";

const filterType = localStorage.getItem("value");


function Filter() {
  const dispatch = useDispatch();
  const optionRef = useRef();
  const myProducts = useSelector(
    (state) => state.products.myProducts
  );
  const [value, setValue] = useState(filterType);


  useEffect(() => {
    filterItems();
  }, [myProducts]);



  useEffect(() => {
    localStorage.setItem("value", value);
  }, [value]);



  function filterItems(e) {
    const val = e?.target.value || optionRef.current?.value;
    setValue(val);
    const fragrance = [...myProducts].filter(
      (items) => items.fields.type === "Fragrance"
    );
    const shoes = [...myProducts].filter(
      (items) => items.fields.type === "Shoe"
    );
    const watches = [...myProducts].filter(
      (items) => items.fields.type === "Watch"
    );
    const bags = [...myProducts].filter(
      (items) => items.fields.type === "Bag"
    );
    const result = {
      None: [...myProducts],
      Fragrance: fragrance,
      Shoe: shoes,
      Watch: watches,
      Bag: bags,
    }[val];
    setProducts([...result]);
    dispatch(filterProducts(result));
  }
  

  return (
    <Select
      data-testid="filter"
      type="products"
      text={value}
      border="none"
      label="Filter"
      options={filter}
      width="w-[9rem]"
      styles={
        "block self-start w-full h-10 text-sm text-right rounded-none border-b outline-none bg-white mb-8 sticky left-0 top-16 z-10 cursor-pointer"
      }
      onChange={filterItems}
      ref={optionRef}
    />
  );
}
export default Filter;
