import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    userData: null,
    status: false,
} 

const loginSlice = createSlice({ 
    name: 'auth',
    initialState,
    reducers: { 
        signIn: (state, action) => { 
            state.status = true;
            state.userData = action.payload.userData;
        },
        signOut: (state) => {
            state.status = false;
            state.userData = null;
        }
        
    }
})

export const { signIn, signOut } = loginSlice.actions
export default loginSlice.reducer


