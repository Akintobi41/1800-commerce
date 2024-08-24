import { fetchAllData } from "../../../contentful/contentful";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../store/productSlice";
import { useQuery } from "react-query";

export const useFetchProducts = () => { 
    const dispatch = useDispatch();

    const loadData = async function () {
        const { items } = await fetchAllData("products");
        items.map((item) => (item.fields.quantity = 0));
        dispatch(setProducts(items));
        return items;
    };
    
  const { data,isLoading } = useQuery("load", loadData);

    return {isLoading,data}
}