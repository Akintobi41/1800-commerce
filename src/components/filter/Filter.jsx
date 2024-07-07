import { filter } from "../../utils/text/text";
import Select from "../reusables/select/Select";
import { useState } from "react";

function Filter({ setProducts, filterData }) {
  const [item, setItem] = useState("");

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
      }

  return (
      <Select
          type="products"
          options={filter}
          styles={
            "block self-start w-full h-10 outline-none bg-white mb-8 sticky left-0 top-16 px-2 z-10 cursor-pointer"
          }
          onChange={Filter}
        />
  )
}

export default Filter