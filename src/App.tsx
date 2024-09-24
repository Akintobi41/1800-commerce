import { GlobalProviders } from "@contexts/index";
import { RouterProvider } from "react-router";
import router from "./router/Router";

const App = () => {
  return (
    <GlobalProviders>
      <RouterProvider router={router} />{" "}
    </GlobalProviders>
  );
};
export default App;
