import { createContext, FC, ReactNode, useContext, useState } from "react"

type StoreProviderProps = { 
   children: ReactNode
}


type StoreContext = { 
  overflow: boolean,
  setOverflow: (id:boolean) => void;
}

const StoreContext = createContext({} as StoreContext)

export function useStoreContext () { 
   return useContext(StoreContext)
}

export const StoreProvider : FC<StoreProviderProps> = ({children})=> { 
  const [overflow, setOverflow] = useState(false);

  return (
    <StoreContext.Provider value={{overflow,setOverflow}}>
    {children}
    </StoreContext.Provider>
    )

}