import './index.css'
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Home from "./Components/Home";
import App from "./App";
import ErrorPage from './Components/ErrorPage';
import ContactUs from './Components/ContactUs';
import { createRoot } from "react-dom/client";
import RestaurantMenu from './Components/RestaurantMenu';


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,

  },

])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);

