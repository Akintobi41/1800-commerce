import { RouterProvider } from "react-router";
import router from "./router/Router";
import GlobalProviders from "@contexts/index";

const App = () => {
  return (
    <GlobalProviders>
      <RouterProvider router={router} />
    </GlobalProviders>
  );
};
export default App;
