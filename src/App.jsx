import { RouterProvider } from "react-router";
import router from "./router/Router";
import { StoreProvider } from "./contexts/MyContext";
import useMyContext from "./contexts/useMyContext";

const App = () => {
  const { overflow, setOverflow} = useMyContext();
  // console.log(overflow,'overflow')
 
  return (
    <StoreProvider value={{overflow,setOverflow}}>
      <RouterProvider router={router} />{" "}
    </StoreProvider>
  );
};
export default App;


