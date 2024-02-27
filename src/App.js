import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import Body from "./Components/Body";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from "./Components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer";





const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
    return (
        <div>
     < Header />   
     < Outlet />
        </div>
    
    )};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:< AppLayout />,
        children:
        [
    {
        path:"/",
        element: < Body />
    }, 
    {
        path:"/about",
        element:< About />
    },
    {
        path:"/contact",
        element: < Contact />
    },
    {
        path:"/restaurantmenu/:resid",
        element: < RestaurantMenu />
    },
    {
        path:"/grocery",
        element: <Suspense fallback={< Shimmer />}>< Grocery /></Suspense>
    }
        ],
        errorElement:< Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={ appRouter } />);
