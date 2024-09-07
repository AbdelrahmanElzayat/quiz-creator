import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";
const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
