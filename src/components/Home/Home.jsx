import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <main className="my-container">
      <Header></Header>
      <Outlet></Outlet>
    </main>
  );
};

export default Home;
