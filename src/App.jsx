import { RouterProvider } from "react-router";
import router from "./router/Router";
import { StoreProvider } from "./contexts/MyContext";
import useMyContext from "./contexts/useMyContext";

const App = () => {
  const { overflow, setOverflow,account,setAccount } = useMyContext();
console.log('APP')
  return (
    <StoreProvider value={{overflow,setOverflow,account,setAccount}}>
      <RouterProvider router={router} />{" "}
    </StoreProvider>
  );
};
export default App;


