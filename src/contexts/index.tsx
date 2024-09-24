import { FC, ReactNode } from "react";
import { QueryClientProviderWrapper } from './useQuery/index';
import { StoreProvider } from "@contexts/useContext";
import { ReduxProvider } from './useRedux/index';

type GlobalProviderProps = { 
  children: ReactNode
}


export const GlobalProviders: FC<GlobalProviderProps> = ({ children }) => { 
  return (
    <QueryClientProviderWrapper>
      <ReduxProvider>
        <StoreProvider>
          {children}
        </StoreProvider>
        </ReduxProvider>
    </QueryClientProviderWrapper>
  );

}

