import Layout from "@components/layout";
import About from "@components/pages/about";
import Cart from "@components/pages/cart";
import Checkout from "@components/pages/checkout";
import Contact from "@components/pages/contact";
import Faqs from "@components/pages/faqs";
import Home from "@components/pages/home";
import ProductDetail from "@components/pages/productDetail";
import Products from "@components/pages/products";
import SignUp from "@components/pages/signUp/SignUp";
import Protected from "@components/protected";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
      {
        path: "/cart/checkout",
        element: (
          <Protected authentication>
            <Checkout />
          </Protected>
        ),
      },
      {
        path: "signup",
        element: (
          <Protected authentication={false}>
            <SignUp />
          </Protected>
        ),
      },
    ],
  },
]);

export default router;
