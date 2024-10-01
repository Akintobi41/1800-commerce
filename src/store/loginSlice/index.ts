import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  name: string;       
  email: string;
  password?:string
}

interface AuthState {
  userData: UserData | null; 
  status: boolean;           
}

// Initial state
const initialState: AuthState = {
  userData: null,
  status: false,
};

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ userData: UserData }>) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    signOut: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { signIn, signOut } = loginSlice.actions;
export default loginSlice.reducer;


export const selectUserData = (state: { auth: AuthState }) => state.auth.userData;
export const selectAuthStatus = (state: { auth: AuthState }) => state.auth.status;
