import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProductSlider from "./components/productSlider/ProductSlider";
import Trending from "./components/Trending/Trending";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Patronize from "./components/patronize/Patronize";
import Subscribe from "./components/subscribe/Subscribe";
import { useEffect, useState } from "react";
import ReachOut from "./components/reachOut/ReachOut";
import Contact from "./pages/contact/Contact";
import Faqs from "./pages/faqs/Faqs";
import Scroll from "./components/scrollToTop/Scroll";
import ReturnPolicy from "./pages/returnPolicy/ReturnPolicy";
import Cart from "./pages/cart/Cart";
import { MyContext } from "./contexts/MyContext";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    menuToggle
      ? document
          .querySelector("body")
          .classList.add("overflow")
      : document
          .querySelector("body")
          .classList.remove("overflow");
  }, [menuToggle]);

  const [search, setSearch] = useState(false);

  return (
    <div>
      <Router>
        <Scroll />
        <MyContext.Provider value={{ search, setSearch }}>
          <Layout
            menuToggle={menuToggle}
            setMenuToggle={setMenuToggle}
            search={search}
            setSearch={setSearch}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Slider />
                    <ProductSlider />
                    <Trending />
                    <About />
                    <Patronize />
                    <Subscribe />
                    <ReachOut />
                  </>
                }
              />
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
