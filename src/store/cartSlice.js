import { createSlice } from "@reduxjs/toolkit";

const items = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
    products: items,
}

const mySlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        modifyCart: (state, action) => {
            const check = state.products.some((product) => {
                return product.name === action.payload.name
            })
            if (!check) {
                const data = { ...action.payload };
                data.quantity = 1;

                state.products.push(data)
            }
            else {
                state.products = state.products.filter((product) => {
                    return product.name !== action.payload.name
                })

            }
            localStorage.setItem('cartItems', JSON.stringify(state.products.map((item) => item)))
        },
        addValue: (state, action) => {
            const data = { ...action.payload };
            state.products.map((item) => {
                if (item.name === data.name) {
                    item.quantity += 1
                }
            })
            localStorage.setItem('cartItems', JSON.stringify(state.products.map((item) => item)))
        },
        reduceValue: (state, action) => {
            const data = { ...action.payload }
            state.products.map((item) => {
                if (item.name === data.name) {
                    item.quantity -= 1
                }
            })
            localStorage.setItem('cartItems', JSON.stringify(state.products.map((item) => item)))
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter((item) => {
                return item.name !== action.payload.name
            })
            localStorage.setItem('cartItems', JSON.stringify(state.products.map((item) => item)))

        },
    }
}
)
export const { modifyCart, addValue, reduceValue, removeFromCart } = mySlice.actions
export default mySlice.reducer;

