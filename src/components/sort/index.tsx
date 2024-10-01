import Select from "@components/reusables/select";
import {
  useAppDispatch,
  useAppSelector,
} from "@hooks/useAppStore";
import {
  productsData,
  sortProducts,
} from "@store/productSlice";
import { sort } from "@utils/constants";
import { ChangeEvent, useEffect, useState } from "react";

const Sort = () => {
  const [value, setValue] = useState(
    localStorage.getItem("sortValue") || "None"
  );
  const products = useAppSelector(productsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    sortItems(value);
    localStorage.setItem("sortValue", value);
  }, [value]);

  const sortItems = (val: string) => {
    let sortedProducts;

    switch (val) {
      case "Alphabetically: A-Z":
        sortedProducts = [...products].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case "Alphabetically: Z-A":
        sortedProducts = [...products].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
      case "Price: Low to High":
        sortedProducts = [...products].sort(
          (a, b) => a.price - b.price
        );
        break;
      case "Price: High to Low":
        sortedProducts = [...products].sort(
          (a, b) => b.price - a.price
        );
        break;
      default:
        sortedProducts = [...products];
    }

    dispatch(sortProducts(sortedProducts));
  };

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <Select
      data-testid="sort"
      type="products"
      text={value}
      label="Sort"
      options={sort}
      border="none"
      width="w-[9rem]"
      styles="block self-start w-full h-10 text-sm border-b rounded-none shadow-none outline-none bg-white mb-8 sticky left-0 top-16 z-10 cursor-pointer"
      onChange={handleChange}
    />
  );
};

export default Sort;
