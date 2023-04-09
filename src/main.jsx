import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Jobs from "./components/Jobs/Jobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/banner",
        element: <Banner></Banner>,
      },
      {
        path: "/features",
        element: <Features></Features>,
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
