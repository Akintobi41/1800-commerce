import { createBrowserRouter } from "react-router-dom";
import About from "../components/about/About";
import Layout from "../components/layout/Layout";
import Cart from "../components/pages/cart/Cart";
import Contact from "../components/pages/contact/Contact";
import Faqs from "../components/pages/faqs/Faqs";
import Home from "../components/pages/home/Home";
import ProductDetail from "../components/pages/productDetail/ProductDetail";
import Products from "../components/pages/products/Products";
import ReturnPolicy from "../components/pages/returnPolicy/ReturnPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/return-policy",
        element: <ReturnPolicy />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);
export default router;
