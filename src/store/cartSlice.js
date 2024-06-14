import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        modifyCart: (state, action) => {
            const check = state.products.some((product) => {
                return product.name === action.payload.name
            })
            console.log(check)
            if (!check) {
                // const cart = {
                //     data: action.payload,
                //     // id: nanoid(),
                // }

                // ++action.payload.quantity
                const data = { ...action.payload };
                data.quantity = 1;
                 
                state.products.push(data)
                // const newData = 
                // console.log(state)
                // ++state.products.quantity;
                // console.log(action.payload)
                // state.products.quantity = 1; mistakes i was making 
                // state.products.quantity = 1;
                


                // state.products = state.products.map((data) => {  //mistakes i was making
                //     data.data.quantity = 1
                //     return {
                //         ...data,
                //         ...data.data.quantity
                //     }
                // })
                // console.log([...state.products, action.payload])

                // return [...state.products,action.payload]
                // return [...[]]
            }
            else {
                state.products = state.products.filter((product) => {
                    return product.name !== action.payload.name
                })

            }
        },
        addValue: (state,action) => {

            // state.products = state.products.((product) => {
            //     product.data.quantity += 1;
            //     return product

            // })
            const data = {...action.payload};
        //     ++data.quantity
            
        //     // // console.log(data
        //     // state.products.push(data)

        //     // console.log(state.products)
        //     console.log(...state.products,data)
        //   return  state.products =  {
        //         ...state.products,data
            //     }
            state.products.map((item) => { 
                if (item.name === data.name) { 
                    item.quantity += 1
                }
            })
        },
        reduceValue: (state, action) => { 
            const data = { ...action.payload }
            
            state.products.map((item) => { 
                if (item.name === data.name) { 
                    item.quantity -= 1
                }
            })
        }
    }
})

export const { modifyCart, addValue,reduceValue } = cartSlice.actions
export default cartSlice.reducer;

