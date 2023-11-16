import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import Contact from "./pages/contact/Contact";
import Faqs from "./pages/faqs/Faqs";
import Scroll from "./components/scrollToTop/Scroll";
import ReturnPolicy from "./pages/returnPolicy/ReturnPolicy";
import Cart from "./pages/cart/Cart";
import { MyContext } from "./contexts/MyContext";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [search, setSearch] = useState(false);
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
      <Router>
        <Scroll />
        <MyContext.Provider value={{ search, setSearch }}>
          <Layout
            menuToggle={menuToggle}
            setMenuToggle={setMenuToggle}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route path="/faqs" element={<Faqs />} />
              <Route
                path="/returnpolicy"
                element={<ReturnPolicy />}
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </MyContext.Provider>
      </Router>
    </div>
  );
}

export default App;
