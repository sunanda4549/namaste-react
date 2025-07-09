//creating h1 tag
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World from React");
//creating root element to render div with id="root"
const root = ReactDOM.createRoot(document.getElementById("root"));
//attaching heading to the root
root.render(heading); /*
<div id="parent"> 
<div id="child">
<h1>iam a h1 tag</h1>
</div>
</div>
/*

const parent = React.createElement(
"div",{id:"parent"},
React.createElement(
"div",{id:"child"},
React.createElement(
"h1",{},"Iam a h1 tag"

)
)
*/  // );

//# sourceMappingURL=namaste-react.6bd02f5a.js.map
