import { RouterProvider } from "react-router";
import router from "./router/Router";
import { StoreProvider } from "./contexts/MyContext";
import useMyContext from "./contexts/useMyContext";

const App = () => {
  const { overflow, setOverflow,account,setAccount } = useMyContext();
  // console.log(overflow,'overflow')
  // console.log(account,'account')
  return (
    <StoreProvider value={{overflow,setOverflow,account,setAccount}}>
      <RouterProvider router={router} />{" "}
    </StoreProvider>
  );
};
export default App;


