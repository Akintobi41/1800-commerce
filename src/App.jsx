import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import { RouterProvider } from "react-router";
import router from "./router/Router";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import { useEffect, useState } from "react";
import Contact from "./components/pages/contact/Contact";
import Faqs from "./components/pages/faqs/Faqs";
import Scroll from "./components/scrollToTop/Scroll";
import ReturnPolicy from "./components/pages/returnPolicy/ReturnPolicy";
import Cart from "./components/pages/cart/Cart";
import { MyContext } from "./contexts/MyContext";
import Products from "./components/pages/products/Products";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    menuToggle
      ? document
          .querySelector("body")
          .classList.add("overflow")
      : document
          .querySelector("body")
          .classList.remove("overflow");
  }, [menuToggle]);

  return (
    <div>
      {/* <Router> */}
      {/* <Scroll /> */}
      <MyContext.Provider
        value={{
          search,
          setSearch,
          menuToggle,
          setMenuToggle,
          cart,
          setCart,
        }}
      >
        {/* <Layout
          menuToggle={menuToggle}
          setMenuToggle={setMenuToggle}
        > */}
        <RouterProvider router={router} />
        {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route */}
        {/* path="/contact" */}
        {/* element={<Contact />} */}
        {/* />{" "} */}
        {/* <Route
                path="/products"
                element={<Products />}
              />
              <Route path="/faqs" element={<Faqs />} />
              <Route
                path="/returnpolicy"
                element={<ReturnPolicy />}
              />
              <Route path="/cart" element={<Cart />} />
            </Routes> */}
        {/* </Layout> */}
      </MyContext.Provider>
      {/* </Router> */}
    </div>
  );
}

export default App;
