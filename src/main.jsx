import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Banner from "./components/Banner/Banner";
import Jobs from "./components/Jobs/Jobs";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/statistic",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
