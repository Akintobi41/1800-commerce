import Select from "@components/reusables/select";
import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import {
  filterProducts,
  myProductsData,
  setProducts,
} from "@store/productSlice";
import { filter } from "@utils/constants";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const Filter = () => {
  const dispatch = useAppDispatch();
  const optionRef = useRef<HTMLSelectElement>(null);
  const myProducts = useAppSelector(myProductsData);
  const [value, setValue] = useState<string>(
    localStorage.getItem("value") || "None"
  );

  useEffect(() => {
    filterItems();
  }, [myProducts]);

  useEffect(() => {
    localStorage.setItem("value", value);
  }, [value]);

  const filterItems = (
    e?: ChangeEvent<HTMLSelectElement>
  ) => {
    const val =
      e?.target.value || optionRef.current?.value || value;
    setValue(val);

    const result = {
      None: myProducts,
      Fragrance: myProducts.filter(
        (item:  { type: string } ) =>
          item.type === "Fragrance"
      ),
      Shoe: myProducts.filter(
        (item:  { type: string } ) =>
          item.type === "Shoe"
      ),
      Watch: myProducts.filter(
        (item:  { type: string } ) =>
          item.type === "Watch"
      ),
      Bag: myProducts.filter(
        (item:  { type: string } ) =>
          item.type === "Bag"
      ),
    }[val];
    if (result) { 
      dispatch(filterProducts(result));
      dispatch(setProducts(result));
 }
  
  };

  return (
    <Select
      data-testid="filter"
      type="products"
      text={value}
      border="none"
      label="Filter"
      options={filter}
      width="w-[9rem]"
      styles="block self-start w-full h-10 text-sm text-right rounded-none border-b outline-none bg-white mb-8 sticky left-0 top-16 z-10 cursor-pointer"
      onChange={filterItems}
      ref={optionRef}
    />
  );
};

export default Filter;
