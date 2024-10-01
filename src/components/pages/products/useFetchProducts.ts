import { fetchAllData } from "@contentful/contentful";
import { useAppDispatch } from "@hooks/useAppStore";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { Product } from "@src/tsTypes/react-types";
import { setProducts } from "@store/productSlice";
import { useQuery } from "react-query";

export const useFetchProducts = () => {
  const dispatch = useAppDispatch();
  const loadData = async function () {
    const items  = await fetchAllData("products");
    items && dispatch(setProducts(items));
    return items;
  };
  const { data, isLoading } = useQuery("load", loadData);
  return { isLoading, data }
}