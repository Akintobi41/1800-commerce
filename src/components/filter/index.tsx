import Select from "@components/reusables/select";
import {
  filterProducts,
  setProducts,
} from "@store/productSlice";
import { filter } from "@utils/constants";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const optionRef = useRef<HTMLSelectElement>(null);
  const myProducts = useSelector(
    (state: any) => state.products.myProducts
  );
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

    dispatch(filterProducts(result));
    dispatch(setProducts(result));
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
