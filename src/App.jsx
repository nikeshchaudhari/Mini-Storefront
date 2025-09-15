import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import ProductDetails from "./Pages/ProductDetails";
import { ToastContainer, toast } from "react-toastify";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Helmet } from "react-helmet";
const myRouter = createBrowserRouter([
  { path: "*", Component: Error },
  { path: "/", Component: Home },
  { path: "/home", Component: Home },
  { path: "/catalog", Component: Catalog },
  { path: "/product-details/:id", Component: ProductDetails },
  {path:"/about",Component:About},
  {path:"/contact-us",Component:Contact}
]);
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      return setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-2xl animate-pulse  ">Loading...</h1>
      </div>
    );
  }
  return (
    <>
   <Helmet>
    <title>Mini Store || Ecommerce Plateform 
    </title>
    <meta name="description" content="Mini store are selling product for affordable price" />
    <meta name="keywords" content="ecommerce, ministore,shoping,buy,sell, bestproducts" />
   </Helmet>
   
      <RouterProvider router={myRouter} />
      <ToastContainer />
    </>
  );
};

export default App;
