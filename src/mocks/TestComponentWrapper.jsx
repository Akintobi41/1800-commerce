import { StoreProvider } from "@contexts";
import useMyContext from "@contexts/useMyContext";
import { Provider } from "react-redux";
import store from "@store/store";
import { MemoryRouter, Route, Routes } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

function TestComponentWrapper({ children,initialEntries = ['/'],route = '/' }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
        retry: 0,
      },
    },
  });
  const { overflow, setOverflow } = useMyContext();

  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={initialEntries}>  
        <Provider store={store}>
          <StoreProvider value={{ overflow, setOverflow }}>
            <Routes>
          <Route path={route} element={children}>
          </Route>
        </Routes>
          </StoreProvider>
        </Provider>
      </MemoryRouter>
    </QueryClientProvider>
  );
}

export default TestComponentWrapper;
