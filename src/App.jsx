import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Products from "./components/products/Products";
import Trending from "./components/Trending/Trending";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Patronize from "./components/patronize/Patronize";
import Subscribe from "./components/subscribe/Subscribe";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <Layout
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
      >
        <Slider />
        <Products />
        <Trending />
        <About />
        <Patronize />
        <Subscribe />
      </Layout>
    </div>
  );
}

export default App;
