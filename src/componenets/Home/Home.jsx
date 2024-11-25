import React from "react";
import Products from "../Product/Products";
import "./Home.css"; // Optional: Create a CSS file to style the Home page

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Online Store</h1>
        <p>Browse and shop the best products!</p>
      </header>
      <Products />
    </div>
  );
}

export default Home;
