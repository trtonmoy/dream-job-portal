import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import HomePage from "./components/HomePage/HomePage";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import JobDetails from "./components/JobDetails/JobDetails";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import savedJobs from "./loader/loader";
import Error from "./components/Error/Error";
import Spinner from "./components/Spinner/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/:id",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/statistic",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog>Resources Archive</Blog>,
      },
      {
        path: "/jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: savedJobs,
      },
      {
        path: "/loader",
        element: <Spinner></Spinner>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
