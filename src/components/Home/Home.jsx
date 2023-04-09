import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-container bg-green-300">
      <h1 className="text-5xl text-red-600">I am from home</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
