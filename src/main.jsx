import './index.css'
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Offers from './Components/Offers';
import Home from "./Components/Home";
import Search from "./Components/Search";

import ErrorPage from './Components/ErrorPage';

import { createRoot } from "react-dom/client";
import RestaurantMenu from './Components/RestaurantMenu';
import HelpAndSupport from './Components/HelpAndSupport';


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
        path: "/",
        element: <Home />,
      },
      {
        path: "/help",
        element: <HelpAndSupport />,
      },
      
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "offers",
        element: <Offers />,
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

