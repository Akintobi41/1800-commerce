import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  CartItem,
  CartState,
} from "@src/tsTypes/react-types";

const loadCartItems = (): CartItem[] => {
  try {
    const items = localStorage.getItem("cartItems");
    return JSON.parse(items || "[]");
  } catch (error) {
    console.error(
      "Failed to parse cart items from localStorage:",
      error
    );
    return [];
  }
};

const initialState: CartState = {
  products: loadCartItems(),
};

const updateLocalStorage = (products: CartItem[]) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(products)
  );
};

const mySlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    modifyCart: (
      state,
      action: PayloadAction<CartItem>
    ) => {
      const existingItem = state.products.find(
        (product) => {
          return product.name === action.payload.name;
        }
      );
      if (!existingItem) {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        state.products = state.products.filter(
          (product) => product.name !== action.payload.name
        );
      }
      updateLocalStorage(state.products);
    },
    addValue: (state, action: PayloadAction<CartItem>) => {
      const item = state.products.find(
        (item) => item.name === action.payload.name
      );
      if (item) {
        item.quantity += 1;
      }
      updateLocalStorage(state.products);
    },
    reduceValue: (
      state,
      action: PayloadAction<CartItem>
    ) => {
      const item = state.products.find(
        (item) => item.name === action.payload.name
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      updateLocalStorage(state.products);
    },
    removeFromCart: (
      state,
      action: PayloadAction<CartItem>
    ) => {
      state.products = state.products.filter((item) => {
        return item.name !== action.payload.name;
      });
      updateLocalStorage(state.products);
    },
    clearCart: (state) => {
      state.products = [];
      updateLocalStorage(state.products);
    },
  },
});
export const {
  modifyCart,
  addValue,
  reduceValue,
  removeFromCart,
  clearCart,
} = mySlice.actions;
export default mySlice.reducer;

export const cartData = (state: { cart: CartState }) =>
  state.cart.products;
