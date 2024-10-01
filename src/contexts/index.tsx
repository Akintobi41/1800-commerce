import { StoreProvider } from "@contexts/useContext";
import { IChild } from "@src/tsTypes/react-types";
import { FC } from "react";
import { QueryClientProviderWrapper } from './useQuery/index';
import { ReduxProvider } from './useRedux/index';


export const GlobalProviders: FC<IChild> = ({ children }) => { 
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

