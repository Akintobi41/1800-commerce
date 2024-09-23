import { createBrowserRouter } from "react-router-dom";
import About from "../components/pages/about/About";
import Cart from "../components/pages/cart/Cart";
import Contact from "../components/pages/contact/Contact";
import Faqs from "../components/pages/faqs/Faqs";
import Home from "../components/pages/home/Home";
import ProductDetail from "../components/pages/productDetail/ProductDetail";
import Products from "../components/pages/products/Products";
import Layout from "../components/Layoutss/Layout";
import Checkout from "../components/pages/checkout/Checkout";
import Protected from "../components/protected/Protected";
import SignUp from "../components/pages/signUp/SignUp";

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
            <Checkout authentication />
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
