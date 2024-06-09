import { createSlice} from "@reduxjs/toolkit";


const initialState = { 
    products: [],
}

const cartSlice = createSlice({ 
    name: 'cart',
    initialState,
    reducers: { 
        modifyCart: (state, action) => { 
            const check = state.products.some((product) => { 
               return product.data.name === action.payload.name
            })
            if (!check) {
                const cart = {
                    data: action.payload
                }
                state.products.push(cart)
            }
            else { 
                state.products = state.products.filter((product) => { 
                   return product.data.name !== action.payload.name
                })
            }
        }
    }
})

export const {modifyCart} = cartSlice.actions
export default cartSlice.reducer;

