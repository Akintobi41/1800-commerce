import { combineReducers } from "@reduxjs/toolkit";
import mySlice from "./cartSlice";
import productSlice from "./productSlice";
import loginSlice from "./loginSlice";
import accountSlice from "./accountSlice";


const rootReducer = combineReducers({
    cart: mySlice,
    products: productSlice,
    auth: loginSlice,
    access:accountSlice,
})

export default rootReducer