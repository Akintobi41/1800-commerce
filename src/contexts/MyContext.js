import { useContext,createContext} from "react";

export const MyContext = createContext({ 
    overflow: false,
    setOverflow: () => {}
    // setOverflow: (overflow)=> !overflow
})

export const useOverflow = () => { 
    return useContext(MyContext)
}
export const StoreProvider = MyContext.Provider;
