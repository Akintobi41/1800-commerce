import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./cartSlice";


const store = configureStore({ 
    reducer: { 
        account: mySlice,    // i noticed that is there need to set the name of the reducer incase ut being used in different scenarios
    }
})
export default store;