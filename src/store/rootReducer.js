import { combineReducers } from "@reduxjs/toolkit";
import mySlice from "./cartSlice";
import productSlice from "./productSlice";


const rootReducer = combineReducers({
    cart: mySlice,
    products:productSlice,
})

export default rootReducer