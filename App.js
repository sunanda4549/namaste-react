import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// const heading = <h1 className="head">Namste React using Jsx</h1>;

const Title = () => <h1 className="head">Namaste React title</h1>;

//React Functional component,component composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); //this heading component is rendered inside the root
