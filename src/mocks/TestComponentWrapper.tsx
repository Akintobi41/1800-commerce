import { MemoryRouter, Route, Routes } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import rootReducer from "@store/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { FC, ReactNode } from "react";
import { StoreProvider } from "@contexts/useContext";
import { ReduxProvider } from "@contexts/useRedux";


interface TestProps { 
  children?: ReactNode,
  initialEntries?: string[],
  route?: string

}
const TestComponentWrapper: FC<TestProps> = ({ children, initialEntries = ['/'], route = '/' }) =>{
  
  const store = configureStore({ 
    reducer: rootReducer
  })
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={initialEntries}>  
        <ReduxProvider>
          <StoreProvider>
            <Routes>
          <Route path={route} element={children}>
          </Route>
        </Routes>
          </StoreProvider>
        </ReduxProvider>
      </MemoryRouter>
    </QueryClientProvider>
  );
}

export default TestComponentWrapper;
