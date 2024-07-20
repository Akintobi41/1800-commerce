import { useContext,createContext} from "react";

export const MyContext = createContext({ 
    overflow: false,
    setOverflow: () => {}
    
})

export const useOverflow = () => { 
    return useContext(MyContext)
}
export const StoreProvider = MyContext.Provider;
