import { RouterProvider } from "react-router";
import router from "./router/Router";
import { useState } from "react";
import { MyContext } from "./contexts/MyContext";
import Context from "./contexts/context.js";

function App() {
  // const [cart, setCart] = useState(0);
  console.log(Context)
  let numbers = [2, 10, 20];
  const newNumbers = numbers.reduce((initial,total) => { 
    return initial + total
  })
  console.log(newNumbers)
  return (
    <div>
      {/* <MyContext.Provider
        value={{
          cart,
          setCart,
        }}
      > */}
        <RouterProvider router={router} />
      {/* </MyContext.Provider> */}
    </div>
  );
}
export default App;
