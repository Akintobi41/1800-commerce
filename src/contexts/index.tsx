import { IChild } from "@src/tsTypes/react-types";
import store from "@store/index";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Provider } from "react-redux";

type StoreContext = {
  overflow: boolean;
  setOverflow: Dispatch<SetStateAction<boolean>>;
};

export const StoreContext = createContext({} as StoreContext);

export function useStoreContext() {
  return useContext(StoreContext);
}

const GlobalProviders: FC<IChild> = ({ children }) => {
  const queryClient = new QueryClient();
  const [overflow, setOverflow] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StoreContext.Provider
          value={{ overflow, setOverflow }}
        >
          {children}
        </StoreContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
};

export default GlobalProviders;
