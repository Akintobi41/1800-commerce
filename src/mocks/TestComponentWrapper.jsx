import { StoreProvider } from "../contexts"
import useMyContext from "../contexts/useMyContext"
import { Provider } from "react-redux";
import store from "../store/store";
import { QueryClient, QueryClientProvider } from "react-query";

function TestComponentWrapper({children }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                cacheTime: 0,
                retry: 0
        }
    }})
    const { overflow, setOverflow } = useMyContext();
    
    return (
<QueryClientProvider client={queryClient}>
<Provider store={store}>
            <StoreProvider value={{overflow,setOverflow}}>
          {children}
                </StoreProvider>
      </Provider>      
</QueryClientProvider>
        
    
)
}

export default TestComponentWrapper