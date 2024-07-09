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
                // return [...action.payload]
                // state.products.push(...action.payload)   
                state.products = [...state.products, ...action.payload]
                console.log(state.products,'state.products')
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