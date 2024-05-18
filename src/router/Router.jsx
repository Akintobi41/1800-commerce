import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/pages/home/Home";
import Contact from "../components/pages/contact/Contact";
import Faqs from "../components/pages/faqs/Faqs";
import ReturnPolicy from "../components/pages/returnPolicy/ReturnPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
        {
            path: '/',
            element: <Home/>,
            children : [
            ]
        },
        { 
            path: '/contact',
            element : <Contact/>
        },
        { 
            path: '/faqs',
            element : <Faqs/>
        },
        { 
            path: '/return-policy',
            element : <ReturnPolicy/>
        }
    ]
  },
]);

export default router;