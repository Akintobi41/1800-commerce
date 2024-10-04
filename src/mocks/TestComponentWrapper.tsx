import { MemoryRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import rootReducer from "@store/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { FC, ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { CartState } from "@src/tsTypes/react-types";
import { EntryState } from "@store/accountSlice";
import { AuthState } from "@store/loginSlice";
import { ProductState } from "@store/productSlice";
import { StoreContext } from "@contexts/index";
export interface TestProps {
  children?: ReactNode;
  initialEntries?: string[];
  route?: string;
  preloadedState?: Partial<{
    cart: CartState;
    products: ProductState;
    auth: AuthState;
    access: EntryState | EntryState;
  }>;
}
const TestComponentWrapper: FC<TestProps> = ({
  children,
  initialEntries = ["/"],
  route = "/",
  preloadedState,
}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
        retry: 0,
      },
    },
  });

  const [overflow,setOverflow] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <StoreContext.Provider  value={{ overflow, setOverflow }}>
        <MemoryRouter initialEntries={initialEntries}>
          <Provider store={store}>
            <Routes>
              <Route path={route} element={children}></Route>
            </Routes>
          </Provider>
        </MemoryRouter>
      </StoreContext.Provider>
    </QueryClientProvider>
  );
};

export default TestComponentWrapper;
