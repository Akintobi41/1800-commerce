import { combineReducers, configureStore } from '@reduxjs/toolkit'
import accountSlice from '../store/accountSlice'
import mySlice from '../store/cartSlice'
import loginSlice from '../store/loginSlice'
import productSlice from '../store/productSlice'

const rootReducer = combineReducers({
  cart: mySlice,
  products: productSlice,
  auth: loginSlice,
  access: accountSlice,
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}