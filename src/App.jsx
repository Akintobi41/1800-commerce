import { RouterProvider } from "react-router";
import router from "./router/Router";
import { StoreProvider } from "./contexts/MyContext";
import { useState} from "react";

const App = () => {
    const [overflow, setOverflow] = useState(false);
    console.log(overflow,'App')

  return (
    <StoreProvider value={{ overflow, setOverflow }}>
      <RouterProvider router={router} />{" "}
    </StoreProvider>
  );
};
export default App;


