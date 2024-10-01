import { combineReducers } from "@reduxjs/toolkit";
import accountSlice from '../accountSlice/index';
import mySlice from '../cartSlice/index';
import loginSlice from '../loginSlice/index';
import productSlice from '../productSlice/index';

const rootReducer = combineReducers({
  cart: mySlice,
  products: productSlice,
  auth: loginSlice,
  access: accountSlice,
});

export default rootReducer;
