import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/pages/home/Home";
import Contact from "../components/pages/contact/Contact";
import Faqs from "../components/pages/faqs/Faqs";
import ReturnPolicy from "../components/pages/returnPolicy/ReturnPolicy";
import Cart from "../components/pages/cart/Cart";
import Products from "../components/pages/products/Products";
import About from "../components/about/About";
import ProductDetail from "../components/pages/productDetail/ProductDetail";

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
      }, {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: '/products/:id',
            element: <ProductDetail/>
          }
        ]
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
      }, {
        path: "/about",
        element: <About />,
      },

    ],
  },
]);

export default router;
