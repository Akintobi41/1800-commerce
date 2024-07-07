import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./cartSlice";
import rootReducer from "./rootReducer";

const store = configureStore({ 
    reducer: rootReducer
})
export default store;