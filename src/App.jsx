import { RouterProvider } from "react-router";
import { StoreProvider } from "./contexts/MyContext";
import useMyContext from "./contexts/useMyContext";
import router from "./router/Router";

const App = () => {
  const { overflow, setOverflow } = useMyContext();

  return (
    <StoreProvider value={{overflow,setOverflow}}>
      <RouterProvider router={router} />{" "}
    </StoreProvider>
  );
};
export default App;


