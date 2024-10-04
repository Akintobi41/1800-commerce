import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@src/tsTypes/react-types";

export interface ProductState {
  products: Product[];
  myProducts: Product[];
}

const initialState: ProductState = {
  products: [],
  myProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      if (!state.products.length && !state.myProducts.length) {
        state.products = action.payload;
        state.myProducts = action.payload;
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    sortProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    filterProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts, sortProducts, filterProducts } =
  productSlice.actions;
export default productSlice.reducer;

export const productsData = (state: { products: ProductState }) =>
  state.products.products;
export const myProductsData = (state: { products: ProductState }) =>
  state.products.myProducts
