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
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  return (
    <div className="res-card" style={styleCard}>
      {/* <img
        className="res-logo"
        src="https://tse3.mm.bing.net/th/id/OIP.2Q07eWjEiswISgW93oTFtgAAAA?pid=Api&P=0&h=180"
      /> */}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/13b3b7a3bd057dc7c3148f20fd86fe54"
        alt="Swiggy Food"
      />

      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>{resData.data.avgRating} Stars</h4>
      <h4>{resData.data.costForTwo / 100} FoR Two</h4>
      <h4>{resData.data.deliveryTime} minutes</h4>
    </div>
  );
};
const resObj = [
  {
    type: "restaurant",
    data: {
      name: "KFC",
      cuisines: ["Burgers", "Biriyani", "American", "Snacks", "Fast Food"],
      avgRating: "4.3",
      costForTwo: "40000",
      deliveryTime: "35",
      cloudinaryImageId: "bdcd233971b7c8bf77e1fa4471288eb",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Burger",
      cuisines: ["Burgers", "Biriyani", "American", "Snacks", "Fast Food"],
      avgRating: "4.3",
      costForTwo: "40000",
      deliveryTime: "35",
      cloudinaryImageId: "bdcd233971b7c8bf77e1fa4471288eb",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj[1]} />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-text">@copyRights Namste React</h1>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {Body()}
      <Footer></Footer>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //this heading component is rendered inside the root
