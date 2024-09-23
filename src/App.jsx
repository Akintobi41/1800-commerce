import { StoreProvider } from "@contexts/MyContext";
import useMyContext from "@contexts/useMyContext";
import store from "@store/store";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import router from "./router/Router";

const App = () => {
  const { overflow, setOverflow } = useMyContext();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StoreProvider value={{ overflow, setOverflow }}>
          <RouterProvider router={router} />{" "}
        </StoreProvider>
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
