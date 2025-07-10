import React from "react";
import ReactDOM from "react-dom/client";

//create Element -this is basically an object when we render to DOM then it becomes html html element.
// who is parsing this code? PARCEL is a manager,this transpiling is done by BABEL
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//jsx syntax
const jsxheading = <h1>Namaste React using Jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
