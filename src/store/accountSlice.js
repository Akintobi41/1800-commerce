import { createSlice } from '@reduxjs/toolkit';


const initialState = { 
    id: null,
    status:false
}


const accountSlice = createSlice({ 
    name: 'entry',
    initialState,
    reducers: { 
        showEntry: (state,action) => { 
            state.status = true;
            state.id = action.payload
        },
        closeEntry: (state,) => { 
            state.status = false,
             state.id = null 
        }
    }
})

export const {showEntry,closeEntry} = accountSlice.actions
export default accountSlice.reducer 