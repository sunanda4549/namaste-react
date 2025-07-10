import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  - Nav Items
 * Body
 *  -search
 *  -RestaurantContainer
 *  -RestuarantCard
 *          -image
 *           -name of restro
 *           -star rating
 *            -cuisine,delivery tie
 * Footer
 *  -CopyRight
 *  -Links
 *  -Address
 *  -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://tse3.mm.bing.net/th/id/OIP.2Q07eWjEiswISgW93oTFtgAAAA?pid=Api&P=0&h=180"
      />
      <h3>Meghana Foods</h3>
      <h4>Biriyani,North Indian,Asian</h4>
      <h4>4.3 stars</h4>
      <h4>38 Minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {Body()}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //this heading component is rendered inside the root
