// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import "./layout.css"; // Import your CSS file here

function Layout() {
  return (
    <>
      <Header />
      <div className="layout-content">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
