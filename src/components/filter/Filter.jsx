import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../store/productSlice";
import { filter } from "../../utils/text/text";
import Select from "../reusables/select/Select";


function Filter({ setProducts, filterData }) {
  const [item, setItem] = useState("");
  const dispatch = useDispatch()

    function Filter(e) {
        const val = e.target.value;
        setItem(val);
        const fragrance = [...filterData].filter(
          (items) => items.fields.type === "Fragrance"
        );
        const shoes = [...filterData].filter(
          (items) => items.fields.type === "Shoe"
        );
        const watches = [...filterData].filter(
          (items) => items.fields.type === "Watch"
        );
        const bags = [...filterData].filter(
          (items) => items.fields.type === "Bag"
        );
    
        const result = {
          None: [...filterData],
          Fragrance: fragrance,
          Shoes: shoes,
          Watch: watches,
          Bag: bags,
        }[val];
      
      setProducts([...result]);
      dispatch(filterProducts(result))
      }

  return (
      <Select
      type="products"
      border='none'
      label='Filter'
      options={filter}
      width='w-[8.2rem]'
          styles={
            "block self-start w-full h-10 text-[.8rem] text-right border-b outline-none bg-white mb-8 sticky left-0 top-16 z-10 cursor-pointer"
          }
          onChange={Filter}
        />
  )
}

export default Filter