import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    products:[]
    
}
const productSlice = createSlice({ 
    name: 'products',
    initialState,
    reducers: { 
        setProducts: (state, action) => { 
            if (!state.products.length) { 
                state.products = [...state.products, ...action.payload]
            }
        },
        sortProducts: (state, action) => { 
            state.products = action.payload
        },
        filterProducts: (state, action) => { 
            state.products = action.payload
        }
    }
})

export const {setProducts,sortProducts,filterProducts} = productSlice.actions
export default productSlice.reducer