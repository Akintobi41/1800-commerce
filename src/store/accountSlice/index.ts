import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EntryState{ 
    id: number | null,
    status:boolean
}

const initialState:EntryState = { 
    id: null,
    status:false
}


const accountSlice = createSlice({ 
    name: 'entry',
    initialState,
    reducers: { 
        showEntry: (state, action:PayloadAction<number>) => { 
            state.status = true;
            state.id = action.payload
        },
        closeEntry: (state) => { 
            state.status = false,
             state.id = null 
        }
    }
})

export const { showEntry, closeEntry } = accountSlice.actions

export default accountSlice.reducer 

export const accessID= (state: { access: EntryState }) => state.access.id
export const accessStatus = (state: { access: EntryState }) => state.access.status